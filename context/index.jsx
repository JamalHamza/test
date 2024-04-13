'use client';

import { createContext, useContext, useState } from 'react';
const AppContext = createContext({
  quantity: 0,
});

export function AppWrapper({ children }) {
  let [quantity, setQuantity] = useState(0);

  return (
    <AppContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
