import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from '../ItemListContainer/ItemList';
import { compareTwoStrings } from 'string-similarity';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const SearchList = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null);
  const { query } = useParams();

  useEffect(() => {
    setLoading(true);
    getDocs(collection(db, 'products'))
      .then(querySnapshot => {
        if (querySnapshot.size === 0) {
          console.log('No Results');
        }
        const data = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
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
      })
      .finally(() => {
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
