import './ItemListContainer.scss';
import ItemList from './ItemList';
import { getCategory, getItems } from '../../services/util';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ allItems, title, category }) => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (allItems) {
      getItems().then(data => {
        setItems(data);
        setLoading(false);
      });
    } else {
      getCategory(categoryId).then(data => {
        setItems(data);
        setLoading(false);
      });
    }
  }, [allItems, categoryId]);

  return (
    <div className="ItemListContainer">
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
