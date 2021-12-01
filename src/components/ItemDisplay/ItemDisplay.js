import { useState, useContext, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import ConfirmBox from '../ConfirmBox/ConfirmBox';
import './ItemDisplay.scss';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import LoaderDisplay from '../Loader/LoaderDisplay';
import waveTop from '../../assets/images/wave.svg';
import waveBottom from '../../assets/images/wave-1.svg';
import { AnimateSharedLayout } from 'framer-motion';
import ItemDisplayButton from './ItemDisplayButton';

const ItemDisplay = () => {
  const [item, setItem] = useState(0);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [confirm, setConfirm] = useState(false);
  const { addItem, isInCart, getQuantity } = useContext(CartContext);

  useEffect(() => {
    const q = query(
      collection(db, 'products'),
      where('deal', '==', true),
      orderBy('order')
    );
    getDocs(q)
      .then(querySnapshot => {
        if (querySnapshot.size === 0) {
          console.log('No Results');
        }
        setProducts(
          querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        );
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  });

  const handleChange = value => {
    setQuantity(value);
  };

  const handleAdd = () => {
    if (isInCart(products[item].id)) {
      setConfirm(true);
      return;
    }
    addItem(products[item], quantity);
    setQuantity(1);
  };

  const handleConfirm = () => {
    addItem(products[item], quantity);
    setConfirm(false);
    setQuantity(1);
  };

  const handleCancel = () => {
    setConfirm(false);
  };

  const handleItemChange = i => {
    setItem(i);
  };

  return (
    <div className="ItemDisplay">
      <img className="ItemDisplay__waveTop" src={waveTop} alt="Wave" />
      {loading ? (
        <LoaderDisplay />
      ) : (
        <>
          <img
            className="ItemDisplay__image"
            src={products[item].imgUrl}
            alt=""
          />
          <AnimateSharedLayout>
            <ul className="ItemDisplay__buttons">
              <ItemDisplayButton
                isSelected={item === 0}
                color="#d6d4d1"
                onClick={() => handleItemChange(0)}
              />
              <ItemDisplayButton
                isSelected={item === 1}
                color="#a8a098"
                onClick={() => handleItemChange(1)}
              />
              <ItemDisplayButton
                isSelected={item === 2}
                color="#665d55"
                onClick={() => handleItemChange(2)}
              />
              <ItemDisplayButton
                isSelected={item === 3}
                color="#d35b56"
                onClick={() => handleItemChange(3)}
              />
            </ul>
          </AnimateSharedLayout>
          <div className="ItemDisplay__information">
            <h3>{products[item].name}</h3>
            <p>{products[item].description}</p>
            <p className="price">
              ${(products[item].price * quantity).toFixed(2)}
            </p>
            {getQuantity(products[item].id, products[item].stock) === 0 ? (
              <>
                <p className="ItemDetail__cartText">No hay stock.</p>
                <Link to="/cart">Ir al carrito</Link>
              </>
            ) : (
              <ItemCount
                stock={getQuantity(products[item].id, products[item].stock)}
                onChange={handleChange}
                onAdd={handleAdd}
                count={quantity}
              />
            )}
            {confirm ? (
              <ConfirmBox
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                message="Este producto ya se encuentra en el carrito. ¿Desea agregar más?"
              />
            ) : null}
          </div>{' '}
        </>
      )}
      <img className="ItemDisplay__waveBottom" src={waveBottom} alt="Wave" />
    </div>
  );
};

export default ItemDisplay;
