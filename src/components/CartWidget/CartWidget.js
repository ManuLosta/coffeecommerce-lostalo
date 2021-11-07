import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import cartIcon from '../../assets/icons/cart-icon.svg';
import './CartWidget.scss';

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget">
      <img src={cartIcon} alt="Cart icon" />
      {totalItems > 0 ? <span>{totalItems}</span> : ''}
    </Link>
  );
};

export default CartWidget;
