'use client';
import { useAppContext } from '../../../context';

const BuyButton = () => {
  const { quantity, setQuantity } = useAppContext();

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
        <div className='cart-main'>
          <button className='cart-btn' onClick={handleDecrease}>
            -
          </button>
          <input
          className='cart-input'
            type='number'
            value={quantity}
            onChange={handleInputChange}
            min={0}
          />
          <button className='cart-btn' onClick={handleIncrease}>
            +
          </button>
        </div>
      ) : (
        <button className='cart-btn-buy' onClick={handleIncrease}>
          купить
        </button>
      )}
    </div>
  );
};

export default BuyButton;
