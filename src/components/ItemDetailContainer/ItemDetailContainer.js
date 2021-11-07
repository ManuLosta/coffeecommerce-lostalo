import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoaderDetails from '../Loader/LoaderDetails';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.scss';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, 'products'), where('__name__', '==', id));
    getDocs(q)
      .then(querySnapshot => {
        if (querySnapshot.size === 0) {
          console.log('No Results');
        }
        setItem({
          ...querySnapshot.docs[0].data(),
          id: querySnapshot.docs[0].id,
        });
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
