import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cartItems, setCartItems] = useState(defaultValue);
  const [totalItems, setTotalItems] = useState(0);

  const addItem = (item, quantity) => {
    if (cartItems.length > 0 && isInCart(item.id)) {
      const itemIndex = cartItems.findIndex(
        currentItem => currentItem.item.id === item.id
      );
      const newCartItems = cartItems;
      newCartItems[itemIndex].quantity += quantity;
      setCartItems(newCartItems);
      setTotalItems(getTotalItems(newCartItems));
    } else {
      setCartItems([...cartItems, { item, quantity }]);
      setTotalItems(getTotalItems([...cartItems, { item, quantity }]));
    }
  };

  const removeItem = itemId => {
    const newCartItems = cartItems.filter(cartItem => {
      return cartItem.item.id !== itemId;
    });
    setCartItems(newCartItems);
    setTotalItems(getTotalItems(newCartItems));
  };

  const clear = () => {
    setCartItems(defaultValue);
    setTotalItems(0);
  };

  const isInCart = itemId => {
    return cartItems.some(({ item }) => item.id === itemId);
  };

  // Hace un chequeo del stock real menos las cantidad en el carrito, para que no se agreguen productos de más
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
