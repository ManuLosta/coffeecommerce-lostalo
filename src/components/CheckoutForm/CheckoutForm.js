import './CheckoutForm.scss';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase';
import {
  Timestamp,
  collection,
  addDoc,
  doc,
  writeBatch,
} from 'firebase/firestore';

const CheckoutForm = () => {
  const { cartItems, clear } = useContext(CartContext);
  const [price, setPrice] = useState(0);
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    let count = 0;
    cartItems.forEach(cartItem => {
      count = count + cartItem.item.price * cartItem.quantity;
    });
    setPrice(count.toFixed(2));
  }, [cartItems]);

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const orderItems = cartItems.map(({ item, quantity }) => ({
      item: {
        id: item.id,
        name: item.name,
        price: item.price,
      },
      quantity: quantity,
    }));

    const newOrder = {
      buyer: {
        name: data.name,
        phone: data.phone,
        email: data.email,
      },
      items: orderItems,
      total: price,
      date: Timestamp.fromDate(new Date()),
    };

    addDoc(collection(db, 'orders'), newOrder)
      .then(response => {
        const batch = writeBatch(db);
        cartItems.forEach(({ item, quantity }) => {
          const docRef = doc(db, 'products', item.id);
          batch.update(docRef, { stock: item.stock - quantity });
        });
        batch.commit();
        setOrderId(response.id);
        clear();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="CheckoutForm__container">
      {orderId ? (
        <>
          <h3 className="CheckoutForm__message">¡Gracias por elegirnos!</h3>
          <p className="CheckoutForm__message">
            Tu orden ha sido creada con el id: {orderId}
          </p>
        </>
      ) : (
        <form className="CheckoutForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input onChange={handleChange} name="name" type="name" />
          <label htmlFor="email">Correo electrónico</label>
          <input onChange={handleChange} name="email" type="email" />
          <label htmlFor="phone">Teléfono</label>
          <input onChange={handleChange} name="phone" type="tel" />
          <p>Total {price}</p>
          <input type="submit" value="Confirmar Orden" />
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
