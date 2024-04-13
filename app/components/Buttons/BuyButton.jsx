'use client';
import { useAppContext } from '../../../context';

const BuyButton = ({ product }) => {
  const { removeItemFromCart, cart, addToCart } = useAppContext();

  const existsInArray = cart.find((item) => item.id === product.id);

  // Find the product in the cart
  const cartProduct = cart.find((item) => item.id === product.id);

  // If the product exists in the cart, get its quantity
  const quantity = cartProduct ? cartProduct.quantity : 0;

  return (
    <div className='buyBtn'>
      {existsInArray ? (
        <div className='cart-main'>
          <button
            className='cart-btn'
            onClick={() => removeItemFromCart(product)}
          >
            -
          </button>
          <input
            className='cart-input'
            type='number'
            value={quantity}
            readOnly
            min={0}
          />

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
