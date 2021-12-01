import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import './Cart.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cart = () => {
  const { cartItems, totalItems } = useContext(CartContext);
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
      {totalItems === 0 ? (
        <>
          <p className="Cart__empty">No hay productos en el carrito</p>
          <Link to="/" className="Cart__empty--button">
            Comprar
          </Link>
        </>
      ) : (
        <>
          <motion.div
            className="Cart__list"
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
          >
            {cartItems.map(({ item, quantity }) => (
              <CartItem key={item.id} item={item} quantity={quantity} />
            ))}
          </motion.div>
          <div className="Cart__total">
            <div className="Cart__total--text">
              <p>Total por {totalItems} producto(s)</p>
              <p className="price">${price.toFixed(2)}</p>
            </div>
            <Link to="/checkout">Terminar la compra</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
