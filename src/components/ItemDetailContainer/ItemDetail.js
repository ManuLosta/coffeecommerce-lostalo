import { useState, useContext, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import ConfirmBox from '../ConfirmBox/ConfirmBox';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import isInCartIcon from '../../assets/icons/incart-icon.svg';

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const controls = useAnimation();
  const [confirm, setConfirm] = useState(false);
  const { addItem, isInCart, getQuantity } = useContext(CartContext);

  const handleChange = value => {
    setQuantity(value);
  };

  const handleAdd = () => {
    if (isInCart(item.id)) {
      setConfirm(true);
      return;
    }
    addItem(item, quantity);
    setQuantity(1);
  };

  const handleConfirm = () => {
    addItem(item, quantity);
    setConfirm(false);
    setQuantity(1);
  };

  const handleCancel = () => {
    setConfirm(false);
  };

  useEffect(() => {
    if (isInCart(item.id)) {
      controls.start({
        opacity: 1,
        scale: 1,
      });
    }
  }, [controls, isInCart, item]);

  return (
    <div className="ItemDetail">
      <div className="ItemDetail__image">
        <img src={item.imgUrl} alt={item.title} />
        <motion.img
          src={isInCartIcon}
          alt="En el carrito"
          animate={controls}
          initial={{ opacity: 0, scale: 0 }}
          className="ItemDetail__isInCart"
        />
      </div>
      <div className="ItemDetail__content">
        <h3 className="ItemDetail__title">{item.name}</h3>
        <span className="ItemDetail__category">
          {item.category.toUpperCase()}
        </span>
        <p className="ItemDetail__description">{item.description}</p>
        <p className="ItemDetail__price">
          ${(item.price * quantity).toFixed(2)}
        </p>
        {getQuantity(item.id, item.stock) === 0 ? (
          <>
            <p className="ItemDetail__cartText">No hay stock.</p>
            <Link to="/cart">Ir al carrito</Link>
          </>
        ) : (
          <ItemCount
            stock={getQuantity(item.id, item.stock)}
            onChange={handleChange}
            onAdd={handleAdd}
            count={quantity}
          />
        )}
        {confirm ? (
          <ConfirmBox
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            message="Este producto ya se encuentra en el carrito. ??Desea agregar m??s?"
          />
        ) : null}
      </div>
    </div>
  );
};

export default ItemDetail;
