import './ItemListContainer.scss';
import heroImage from '../../assets/images/hero-image.png';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="ItemListContainer">
      <h2>{greeting}</h2>
      <img src={heroImage} alt="Hero" />
    </div>
  );
};

export default ItemListContainer;
