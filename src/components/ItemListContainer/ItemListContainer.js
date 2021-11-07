import './ItemListContainer.scss';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ allItems, title, category }) => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    var q;
    if (allItems) {
      q = query(collection(db, 'products'));
    } else {
      q = query(
        collection(db, 'products'),
        where('category', '==', categoryId)
      );
    }
    getDocs(q)
      .then(querySnapshot => {
        if (querySnapshot.size === 0) {
          console.log('No Results');
        }
        setItems(
          querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [allItems, categoryId]);

  return (
    <div id="list" className="ItemListContainer">
      <ItemList
        loading={loading}
        items={items}
        category={
          allItems
            ? 'Productos'
            : `${categoryId.charAt(0).toUpperCase()}${categoryId.slice(1)}`
        }
      />
    </div>
  );
};

export default ItemListContainer;
