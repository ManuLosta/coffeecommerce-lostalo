import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import ConfirmBox from '../ConfirmBox/ConfirmBox';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
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

  return (
    <div className="ItemDetail">
      <div className="ItemDetail__image">
        <img src={item.imgUrl} alt={item.title} />
      </div>
      <div className="ItemDetail__content">
        <h3 className="ItemDetail__title">
          {item.name}{' '}
          {isInCart(item.id) && <span className="ItemDetail__isInCart"></span>}
        </h3>
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
            message="Este producto ya se encuentra en el carrito. ¿Desea agregar más?"
          />
        ) : null}
      </div>
    </div>
  );
};

export default ItemDetail;
