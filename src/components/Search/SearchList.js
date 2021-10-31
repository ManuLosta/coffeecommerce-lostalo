import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getItems } from '../../services/util';
import ItemList from '../ItemListContainer/ItemList';
import { compareTwoStrings } from 'string-similarity';

const SearchList = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null);
  const { query } = useParams();

  useEffect(() => {
    setLoading(true);
    getItems().then(data => {
      const filteredData = data.filter(item => {
        if (
          compareTwoStrings(
            item.name
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase(),
            query
          ) > 0.4
        ) {
          return item;
        } else if (
          compareTwoStrings(
            item.category
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase(),
            query
          ) > 0.8
        ) {
          return item;
        } else {
          return null;
        }
      });
      setItems(filteredData);
      setLoading(false);
    });
  }, [query]);

  return (
    <div className="SearchList">
      {loading ? (
        <ItemList loading={true} />
      ) : (
        <ItemList
          items={items}
          category={
            items.length > 0
              ? `Resultados para "${query}"`
              : `No se han encontrado resultados.`
          }
        />
      )}
    </div>
  );
};

export default SearchList;
