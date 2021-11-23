import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import InCartIcon from '../../assets/icons/incart-icon.svg';

const Item = ({ item }) => {
  const { isInCart } = useContext(CartContext);

  return (
    <Link to={`/item/${item.id}`} className="Item">
      {isInCart(item.id) && (
        <img className="Item__isInCart" src={InCartIcon} alt="In Cart" />
      )}
      <div className="Item__image">
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div className="Item__info">
        <p className="Item__info--name">{item.name}</p>
        <p className="Item__info--price">${item.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default Item;
