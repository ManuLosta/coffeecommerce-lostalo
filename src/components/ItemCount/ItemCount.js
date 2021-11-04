import './ItemCount.scss';

const ItemCount = ({ stock, id, onAdd, onChange, count }) => {
  const handleAdd = amount => {
    if (count + amount > stock || count + amount < 1) {
      return;
    }
    onChange(count + amount);
  };

  return (
    <>
      <div className="ItemCount">
        <button
          className={count === 1 ? 'disabled' : ''}
          onClick={() => handleAdd(-1)}
        >
          -
        </button>
        <p>{count}</p>
        <button
          className={count === stock ? 'disabled' : ''}
          onClick={() => handleAdd(1)}
        >
          +
        </button>
      </div>
      <button onClick={() => onAdd(id, count)} className="ItemCount__addToCart">
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
