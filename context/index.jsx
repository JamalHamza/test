'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Update local storage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productToAdd) => {
    const existingProductIndex = cart.findIndex(
      (product) => product.id === productToAdd.id
    );

    if (existingProductIndex !== -1) {
      // If product exists in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If product doesn't exist in the cart, add it as a new item
      setCart((prevCart) => [...prevCart, { ...productToAdd, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (productToRemove) => {
    const existingProductIndex = cart.findIndex(
      (product) => product.id === productToRemove.id
    );

    if (existingProductIndex >= 0) {
      // If product exists in the cart
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity -= 1;

      if (updatedCart[existingProductIndex].quantity === 0) {
        // If quantity becomes zero, remove the item from cart and local storage
        updatedCart.splice(existingProductIndex, 1);
      }

      setCart(updatedCart);
    }
  };

 

  // Calculate total cost
  const totalCost = cart.reduce((total, item) => total + item.total, 0);

  return (
    <AppContext.Provider
      value={{ removeItemFromCart, cart, addToCart,  totalCost }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
