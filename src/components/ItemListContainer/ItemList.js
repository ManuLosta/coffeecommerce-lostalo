import Item from './Item';
import './ItemList.scss';
import LoaderItem from '../Loader/LoaderItem';

const ItemList = ({ items, loading, category }) => {
  return (
    <div className="ItemList">
      <h2>{category}</h2>
      <div className="ItemList__flex">
        {!loading ? (
          items.map(item => <Item key={item.id} item={item} />)
        ) : (
          <>
            <LoaderItem />
            <LoaderItem />
            <LoaderItem />
          </>
        )}
      </div>
    </div>
  );
};

export default ItemList;
