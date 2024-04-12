'use client';
import { useState } from 'react';

const BuyButton = () => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setQuantity(value);
    }
  };

  return (
    <div>
      {quantity > 0 ? (
        <>
          <button onClick={handleDecrease}>-</button>
          <input
            type='number'
            value={quantity}
            onChange={handleInputChange}
            min={0}
          />
          <button onClick={handleIncrease}>+</button>
        </>
      ) : (
        <button onClick={handleIncrease}>купить</button>
      )}
    </div>
  );
};

export default BuyButton;
