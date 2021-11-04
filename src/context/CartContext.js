import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ defaultValue = [], children }) => {
  const [items, setItems] = useState(defaultValue);

  const addItem = (item, quantity) => {
    if (items.length > 0 && isInCart(item.id)) {
      const itemIndex = items.findIndex(
        currentItem => currentItem.item.id === item.id
      );
      const newItems = items;
      newItems[itemIndex].quantity += quantity;
      setItems(newItems);
    } else {
      setItems([...items, { item, quantity }]);
    }
  };

  const removeItem = itemId => {};

  const clear = () => {
    setItems(defaultValue);
  };

  const isInCart = itemId => {
    return items.some(({ item }) => item.id === itemId);
  };

  // Hace un chequeo del stock real menos las cantidad en el carrito, para que no se agreguen productos de más
  const getQuantity = (itemId, stock) => {
    const item = items.find(currentItem => currentItem.item.id === itemId);
    if (item) {
      return stock - item.quantity;
    }
    return stock;
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clear, isInCart, getQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
