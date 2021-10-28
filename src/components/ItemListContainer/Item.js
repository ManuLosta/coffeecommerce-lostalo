import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`} className="Item">
      <div className="Item__image">
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div className="Item__info">
        <p className="Item__info--name">{item.name}</p>
        <p className="Item__info--price">${item.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default Item;
