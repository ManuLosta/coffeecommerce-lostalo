import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoaderDetails from '../Loader/LoaderDetails';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.scss';
import { db } from '../../firebase';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, 'products', id);
    getDoc(docRef)
      .then(doc => {
        if (doc.exists()) {
          setItem({
            ...doc.data(),
            id: doc.id,
          });
        } else {
          console.log('No such document!');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      {loading ? <LoaderDetails /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
