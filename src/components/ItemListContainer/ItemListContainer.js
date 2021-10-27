import './ItemListContainer.scss';
import ItemList from './ItemList';
import { getItems } from '../../services/util';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ all }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getItems().then(data => {
      if (all) {
        setItems(data);
      } else {
        setItems(data.filter(item => item.category.toLowerCase() === id));
      }
      setLoading(false);
    });
  }, [all, id]);

  return (
    <div className="ItemListContainer">
      <ItemList
        loading={loading}
        items={items}
        category={
          all ? 'Productos' : `${id.charAt(0).toUpperCase()}${id.slice(1)}`
        }
      />
    </div>
  );
};

export default ItemListContainer;
