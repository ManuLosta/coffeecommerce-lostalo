import './ItemListContainer.scss';
import ItemList from './ItemList';
import { getCategory, getItems } from '../../services/util';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ allItems }) => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    if (allItems) {
      getItems().then(data => {
        setItems(data);
        setLoading(false);
      });
    } else {
      getCategory(id).then(data => {
        setItems(data);
        setLoading(false);
      });
    }
  }, [allItems, id]);

  return (
    <div className="ItemListContainer">
      <ItemList
        loading={loading}
        items={items}
        category={
          allItems ? 'Productos' : `${id.charAt(0).toUpperCase()}${id.slice(1)}`
        }
      />
    </div>
  );
};

export default ItemListContainer;
