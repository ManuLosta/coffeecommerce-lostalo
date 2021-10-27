import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../services/util';
import LoaderDetails from '../Loader/LoaderDetails';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.scss';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getItem(id).then(data => {
      setItem(data);
      setLoading(false);
    });
  });

  return (
    <div className="ItemDetailContainer">
      {loading ? <LoaderDetails /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
