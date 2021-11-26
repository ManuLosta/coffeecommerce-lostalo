import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import userIcon from '../../assets/icons/user-icon.svg';
import './UserWidget.scss';
import { Link } from 'react-router-dom';

const UserWidget = ({ onClick }) => {
  const { currentUser, signout } = useContext(AuthContext);
  const [userName, setUserName] = useState();

  useEffect(() => {
    if (currentUser) {
      getDoc(doc(db, 'users', currentUser.uid)).then(doc => {
        if (doc.exists()) {
          setUserName(doc.data().name);
        }
      });
    }
  }, [currentUser]);

  const handleLogOut = () => {
    onClick();
    signout().then(() => {
      setUserName('');
    });
  };

  return (
    <div className="UserWidget">
      <img src={userIcon} alt={userName} />
      <p>{userName}</p>
      <div className="UserWidget__dropdown">
        {currentUser ? (
          <button onClick={handleLogOut}>Cerrar Sesión</button>
        ) : (
          <>
            <Link onClick={onClick} to="/login">
              Iniciar sesión
            </Link>
            <Link onClick={onClick} to="/signup">
              Registrarse
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default UserWidget;
