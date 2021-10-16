import ItemDisplay from './ItemDisplay';
import './ItemListContainer.scss';
import heroImage from '../../assets/images/hero-image.png';

const ItemListContainer = ({ greeting }) => {
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
    </div>
  );
};

export default ItemListContainer;
