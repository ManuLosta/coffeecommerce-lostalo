import './CheckoutForm.scss';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';

const CheckoutForm = () => {
  const { cartItems } = useContext(CartContext);
  const [price, setPrice] = useState(0);
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    let count = 0;
    cartItems.forEach(cartItem => {
      count = count + cartItem.item.price * cartItem.quantity;
    });
    setPrice(count);
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
    }));

    const newOrder = {
      buyer: {
        name: data.name,
        phone: data.phone,
        email: data.email,
      },
      items: orderItems,
      total: price,
    };

    console.log(newOrder);
  };

  return (
    <div className="CheckoutForm__container">
      <form className="CheckoutForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input onChange={handleChange} name="name" type="name" />
        <label htmlFor="email">Correo electrónico</label>
        <input onChange={handleChange} name="email" type="email" />
        <label htmlFor="phone">Teléfono</label>
        <input onChange={handleChange} name="phone" type="tel" />
        <h2>Total</h2>
        <h2>${price}</h2>
        <input type="submit" value="Confirmar Orden" />
      </form>
    </div>
  );
};

export default CheckoutForm;
