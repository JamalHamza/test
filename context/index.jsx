'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [phoneNumber, setPhoneNumber] = useState(() => {
    return localStorage.getItem('phoneNumber') || '';
  });

  // Update local storage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Update local storage whenever the phoneNumber state changes
  useEffect(() => {
    localStorage.setItem('phoneNumber', phoneNumber);
  }, [phoneNumber]);

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
        updatedCart.splice(existingProductIndex, 1);
      }

      setCart(updatedCart);
    }
  };

  const updatePhoneNumber = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber);
  };

  const totalCost = cart.reduce((total, item) => total + item.total, 0);

  async function postOrderRequest(body) {
    const res = await fetch('http://o-complex.com:1337/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      toast('Success!');
    } else {
      toast('Error!');
    }
  }

  return (
    <AppContext.Provider
      value={{
        removeItemFromCart,
        cart,
        addToCart,
        totalCost,
        phoneNumber,
        updatePhoneNumber,
        postOrderRequest,
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
