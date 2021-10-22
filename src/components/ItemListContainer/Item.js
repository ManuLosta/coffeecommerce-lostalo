const Item = ({ item }) => {
  return (
    <div className="Item">
      <img src={item.imgUrl} alt="" />
      <div className="Item__info">
        <p className="Item__info--name">{item.name}</p>
        <p className="Item__info--price">{item.price}</p>
      </div>
    </div>
  );
};

export default Item;
