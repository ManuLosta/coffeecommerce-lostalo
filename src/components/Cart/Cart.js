import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import './Cart.scss';
import { Link } from 'react-router-dom';
import CartLoader from '../Loader/CartLoader';
import CartButtonLoader from '../Loader/CartButtonLoader';

const Cart = () => {
  const { cartItems, totalItems, loading } = useContext(CartContext);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let count = 0;
    cartItems.forEach(cartItem => {
      count = count + cartItem.item.price * cartItem.quantity;
    });
    setPrice(count);
  }, [totalItems, cartItems]);

  return (
    <div className="Cart">
      {loading ? (
        <>
          <div className="Cart__list">
            <CartLoader />
            <CartLoader />
            <CartLoader />
          </div>
          <div className="Cart__total">
            <CartButtonLoader />
          </div>
        </>
      ) : (
        <>
          {totalItems === 0 ? (
            <>
              <p className="Cart__empty">No hay productos en el carrito</p>
              <Link to="/" className="Cart__empty--button">
                Comprar
              </Link>
            </>
          ) : (
            <>
              <div className="Cart__list">
                {cartItems.map(({ item, quantity }) => (
                  <CartItem key={item.id} item={item} quantity={quantity} />
                ))}
              </div>
              <div className="Cart__total">
                <div className="Cart__total--text">
                  <p>Total por {totalItems} producto(s)</p>
                  <p className="price">${price.toFixed(2)}</p>
                </div>
                <Link to="/checkout">Terminar la compra</Link>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
