import { useState, useEffect } from 'react';
import './ItemCount.scss';

const ItemCount = ({ stock, initial, id }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, [id, initial]);

  const handleAdd = amount => {
    if (count + amount > stock || count + amount < 1) {
      return;
    }
    setCount(count + amount);
  };

  return (
    <>
      <div className="ItemCount">
        <button
          className={count === 1 && 'disabled'}
          onClick={() => handleAdd(-1)}
        >
          -
        </button>
        <p>{count}</p>
        <button
          className={count === stock && 'disabled'}
          onClick={() => handleAdd(1)}
        >
          +
        </button>
      </div>
      <button className="ItemCount__addToCart">Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
