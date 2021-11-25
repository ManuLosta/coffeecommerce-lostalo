import { createContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useHistory } from 'react-router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setCurrentUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        localStorage.setItem('user', JSON.stringify(user));
        setCurrentUser(user);
        history.push('/');
      })
      .catch(error => {
        throw getErrorMessage(error.code);
      });
  };

  const signup = async (email, password, name, phone) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setDoc(doc(db, 'users', userCredential.user.uid), {
          email: email,
          name: name,
          phone: phone,
        }).catch(error => console.error(error));
        history.push('/login');
      })
      .catch(error => {
        throw getErrorMessage(error.code);
      });
  };

  const signout = async () => {
    return signOut(auth)
      .then(() => {
        setCurrentUser(null);
        localStorage.removeItem('user');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getErrorMessage = code => {
    const messages = {
      'auth/invalid-email': 'Correo electrónico inválido.',
      'auth/user-not-found': 'Correo o contraseña incorrecta.',
      'auth/wrong-password': 'Contraseña incorrecta.',
      'auth/email-already-in-use': 'Correo ya utilizado.',
    };

    return messages[code] || code;
  };

  return (
    <AuthContext.Provider value={{ login, signup, signout, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
