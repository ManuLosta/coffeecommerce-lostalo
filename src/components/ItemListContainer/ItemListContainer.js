import ItemDisplay from './ItemDisplay';
import './ItemListContainer.scss';
import heroImage from '../../assets/images/hero-image.png';
import ItemList from './ItemList';
import { getItems } from '../../services/util';
import { useEffect, useState } from 'react';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="ItemListContainer">
      <div className="ItemListContainer__landing">
        <div className="Landing__content">
          <h2>{greeting}</h2>
          <p>
            Empezá tu mañana de la mejor forma con un buen café. Elegí alguno de
            nuestro catálogo y disfrutá un sabor único.
          </p>
          <a href="/coffeecommerce-lostalo">Comprar ahora</a>
        </div>
        <img src={heroImage} alt="Hero" />
      </div>
      <ItemDisplay />
      <ItemList loading={loading} items={items} />
    </div>
  );
};

export default ItemListContainer;
