import { useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './CartItem.scss';
import removeIcon from '../../assets/icons/delete.svg';

const CartItem = ({ item, quantity }) => {
  const { addItem, removeItem } = useContext(CartContext);
  const controls = useAnimation();

  const handleChange = newQuantity => {
    addItem(item, -quantity + newQuantity);
  };

  const handleRemove = () => {
    controls
      .start({
        x: -200,
        opacity: 0,
        height: 0,
        margin: 0,
        padding: 0,
      })
      .then(() => {
        removeItem(item.id);
      });
  };

  return (
    <motion.div
      animate={controls}
      transition={{ duration: 0.25 }}
      className="CartItem"
    >
      <div className="CartItem__image">
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div className="CartItem__container">
        <div className="CartItem__info">
          <p className="CartItem__info--text">{item.name}</p>
          <p className="CartItem__info--text price">
            ${(item.price * quantity).toFixed(2)}
          </p>
        </div>
        <div className="CartItem__controls">
          <ItemCount
            stock={item.stock}
            initial={quantity}
            count={quantity}
            onChange={handleChange}
          />
          <img
            className="CartItem__controls--remove"
            onClick={handleRemove}
            src={removeIcon}
            alt="Delete"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
