'use client';
import { useAppContext } from '../../../context';

const BuyButton = ({ product }) => {
  const { removeItemFromCart, cart, addToCart, removeFromCart } =
    useAppContext();

  const existsInArray = cart.find((item) => item.id === product.id);

  return (
    <div>
      {existsInArray ? (
        <div className='cart-main'>
          <button
            className='cart-btn'
            onClick={() => removeItemFromCart(product)}
          >
            -
          </button>

          

          <button className='cart-btn' onClick={() => addToCart(product)}>
            +
          </button>
        </div>
      ) : (
        <button className='cart-btn-buy' onClick={() => addToCart(product)}>
          купить
        </button>
      )}
    </div>
  );
};

export default BuyButton;
