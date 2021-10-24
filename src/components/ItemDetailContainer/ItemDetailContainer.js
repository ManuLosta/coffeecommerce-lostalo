import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItems } from '../../services/util';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.scss';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getItem();
  });

  const getItem = async () => {
    const data = await getItems();
    setItem(data.find(item => item.id === id));
    setLoading(false);
  };

  return (
    <div className="ItemDetailContainer">
      {loading ? null : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
