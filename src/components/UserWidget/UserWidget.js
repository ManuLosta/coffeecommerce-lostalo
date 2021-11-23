import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const UserWidget = () => {
  const { currentUser } = useContext(AuthContext);
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

  return (
    <div>
      <p>{userName}</p>
    </div>
  );
};

export default UserWidget;
