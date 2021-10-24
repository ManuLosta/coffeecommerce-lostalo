import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <Link to={`/details/${item.id}`} className="Item">
      <img src={item.imgUrl} alt="" />
      <div className="Item__info">
        <p className="Item__info--name">{item.name}</p>
        <p className="Item__info--price">{item.price}</p>
      </div>
    </Link>
  );
};

export default Item;
