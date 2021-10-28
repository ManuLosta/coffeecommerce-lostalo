import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const handleChange = value => {
    setQuantity(value);
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
        <ItemCount stock={item.stock} initial={1} onChange={handleChange} />
      </div>
    </div>
  );
};

export default ItemDetail;
