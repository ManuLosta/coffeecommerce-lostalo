import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleChange = value => {
    setQuantity(value);
  };

  const handleAdd = () => {
    setQuantity(1);
    setAdded(true);
  };

  return (
    <div className="ItemDetail">
      <div className="ItemDetail__image">
        <img src={item.imgUrl} alt={item.title} />
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
        {!added ? (
          <ItemCount
            stock={item.stock}
            initial={1}
            onChange={handleChange}
            onAdd={handleAdd}
          />
        ) : (
          <>
            <p className="ItemDetail__cartText">
              Este producto ya se encuentra en tu carrito.
            </p>
            <Link to="/cart">Terminar la compra</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
