import cartIcon from '../../assets/icons/cart-icon.svg';
import './CartWidget.scss';

const CartWidget = () => {
  return (
    <div className="CartWidget">
      <img src={cartIcon} alt="Cart icon" />
    </div>
  );
};

export default CartWidget;
