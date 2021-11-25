import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { createContext, useState } from 'react';
import { db } from '../firebase';
import { AuthContext } from './AuthContext';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const { currentUser } = useContext(AuthContext);
  const cartRef = currentUser ? doc(db, 'users', currentUser.uid) : '';

  useEffect(() => {
    if (currentUser) {
      localStorage.removeItem('cart');
      getDoc(cartRef).then(doc => {
        setCartItems(doc.data().cart);
        setTotalItems(getTotalItems(doc.data().cart));
      });
    } else if (localStorage.getItem('cart')) {
      setCartItems(JSON.parse(localStorage.getItem('cart')));
      setTotalItems(getTotalItems(JSON.parse(localStorage.getItem('cart'))));
    } else {
      setCartItems([]);
      setTotalItems(0);
    }
  }, [cartRef, currentUser]);

  const addItem = async (item, quantity) => {
    let newCartItems;

    if (cartItems.length > 0 && isInCart(item.id)) {
      const itemIndex = cartItems.findIndex(
        currentItem => currentItem.item.id === item.id
      );
      newCartItems = cartItems;
      newCartItems[itemIndex].quantity += quantity;
    } else {
      newCartItems = [...cartItems, { item, quantity }];
    }

    if (currentUser) {
      await updateDoc(cartRef, {
        cart: newCartItems,
      });
    } else {
      localStorage.setItem('cart', JSON.stringify(newCartItems));
    }

    setCartItems(newCartItems);
    setTotalItems(getTotalItems(newCartItems));
  };

  const removeItem = async itemId => {
    const newCartItems = cartItems.filter(cartItem => {
      return cartItem.item.id !== itemId;
    });

    if (currentUser) {
      await updateDoc(cartRef, {
        cart: newCartItems,
      });
    } else {
      localStorage.setItem('cart', JSON.stringify(newCartItems));
    }

    setCartItems(newCartItems);
    setTotalItems(getTotalItems(newCartItems));
  };

  const clear = async () => {
    if (currentUser) {
      console.log('object');
      await updateDoc(cartRef, {
        cart: [],
      });
    }

    localStorage.removeItem('cart');
    setCartItems([]);
    setTotalItems(0);
  };

  const isInCart = itemId => {
    return cartItems.some(({ item }) => item.id === itemId);
  };

  const getQuantity = (itemId, stock) => {
    const item = cartItems.find(currentItem => currentItem.item.id === itemId);
    if (item) {
      return stock - item.quantity;
    }
    return stock;
  };

  const getTotalItems = items => {
    let count = 0;
    items.forEach(({ quantity }) => {
      count = count + quantity;
    });
    return count;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clear,
        isInCart,
        getQuantity,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
