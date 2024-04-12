import React, { useState } from 'react';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
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
      <button onClick={handleDecrease}>-</button>
      <input type='text' value={quantity} onChange={handleInputChange} />
      <button onClick={handleIncrease}>+</button>
      <div>Total: {quantity}</div>
    </div>
  );
};

export default QuantitySelector;
