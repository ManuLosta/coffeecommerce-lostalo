import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div className="ItemDetail">
      <img src={item.imgUrl} alt={item.title} />
      <div className="ItemDetail__content">
        <h3 className="ItemDetail__title">{item.name}</h3>
        <span className="ItemDetail__category">
          {item.category.toUpperCase()}
        </span>
        <p className="ItemDetail__description">{item.description}</p>
        <p className="ItemDetail__price">{item.price}</p>
        <ItemCount stock={item.stock} initial={1} />
      </div>
    </div>
  );
};

export default ItemDetail;
