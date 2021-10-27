import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`} className="Item">
      <img src={item.imgUrl} alt={item.name} />
      <div className="Item__info">
        <p className="Item__info--name">{item.name}</p>
        <p className="Item__info--price">{item.price}</p>
      </div>
    </Link>
  );
};

export default Item;
