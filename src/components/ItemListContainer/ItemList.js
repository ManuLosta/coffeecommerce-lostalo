import Item from './Item';
import './ItemList.scss';
import Loader from '../Loader/Loader';

const ItemList = ({ items, loading }) => {
  return (
    <div className="ItemList">
      <h2>Destacados</h2>
      <div className="ItemList__flex">
        {!loading ? (
          items.map(item => <Item key={item.id} item={item} />)
        ) : (
          <>
            <Loader />
            <Loader />
            <Loader />
          </>
        )}
      </div>
    </div>
  );
};

export default ItemList;
