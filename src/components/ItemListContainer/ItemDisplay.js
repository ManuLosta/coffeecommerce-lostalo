import { useState } from 'react';
import ItemCount from './ItemCount';
import './ItemDisplay.scss';

const ItemDisplay = () => {
  const [item, setItem] = useState(0);
  const products = [
    {
      id: '0',
      name: 'Light Roast Coffee',
      description: 'Honey, citrus fruit, and floral.',
      price: '$14.99',
      imgUrl:
        'https://coffeebros.com/wp-content/uploads/2019/01/light-roast-website-png.png',
      stock: 10,
    },
    {
      id: '1',
      name: 'Medium Roast Coffee',
      description: 'Brown sugar, red fruit, and hazelnut.',
      price: '$14.99',
      imgUrl:
        'https://coffeebros.com/wp-content/uploads/2019/01/medium-roast-website-png-1.png',
      stock: 7,
    },
    {
      id: '2',
      name: 'Dark Roast Coffee',
      description: 'Chocolate, caramel, and maple.',
      price: '$14.99',
      imgUrl:
        'https://coffeebros.com/wp-content/uploads/2019/01/dark-roast-website-png-2.png',
      stock: 11,
    },
    {
      id: '3',
      name: 'Espresso Roast Coffee',
      description: 'Strawberry, sugar cane, and vanilla.',
      price: '$14.99',
      imgUrl:
        'https://coffeebros.com/wp-content/uploads/2019/02/Espresso-roast-website-png.png',
      stock: 16,
    },
  ];

  const handleItemChange = i => {
    setItem(i);
  };

  const onAdd = (id, count) => {
    alert(
      `Se ha agregado correctamente: ${count} ${products[Number(id)].name}`
    );
  };

  return (
    <div className="ItemDisplay">
      <img src={products[item].imgUrl} alt="" />
      <div className="ItemDisplay__buttons">
        <span
          className={item === 0 ? 'active' : null}
          style={{ backgroundColor: '#d6d4d1' }}
          onClick={() => handleItemChange(0)}
        ></span>
        <span
          className={item === 1 ? 'active' : null}
          style={{ backgroundColor: '#a8a098' }}
          onClick={() => handleItemChange(1)}
        ></span>
        <span
          className={item === 2 ? 'active' : null}
          style={{ backgroundColor: '#665d55' }}
          onClick={() => handleItemChange(2)}
        ></span>
        <span
          className={item === 3 ? 'active' : null}
          style={{ backgroundColor: '#d35b56' }}
          onClick={() => handleItemChange(3)}
        ></span>
      </div>
      <div className="ItemDisplay__information">
        <h3>{products[item].name}</h3>
        <p>{products[item].description}</p>
        <p className="price">{products[item].price}</p>
        <ItemCount
          onAdd={onAdd}
          id={products[item].id}
          initial={1}
          stock={products[item].stock}
        />
      </div>
    </div>
  );
};

export default ItemDisplay;
