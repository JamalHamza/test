'use client';
import { useAppContext } from '../../context';
import Form from './Form';

function shortenString(str) {
  return str.slice(0, 5) + '...';
}

function Cart() {
  const { cart, postOrderRequest, phoneNumber } = useAppContext();

  const productBody = cart.map((product) => ({
    id: product.id,
    quantity: product.quantity,
  }));
  const postBodyRequest = {
    phone: phoneNumber,
    cart: productBody,
  };


  return (
    <div className='cart'>
      <p className='cart-title'>Добавленные товары</p>
      <div className='cart-detail'>
        {cart.length == 0 ? (
          <p style={{ color: 'red', fontSize: '18px' }}>
            В корзине нет товаров
          </p>
        ) : (
          cart.map((item) => {
            const { title, quantity, price } = item;
            return (
              <div
                key={item.title + Math.random()}
                className='cart-product-details'
              >
                <p className='cart-product-title'>{shortenString(title)}</p>
                <p>x{quantity}</p>
                <p>{quantity * price}₽</p>
              </div>
            );
          })
        )}
      </div>
      <div className='form'>
        <>
          <Form />
        </>
        <button
          className='form-btn'
          onClick={() => postOrderRequest(postBodyRequest)}
        >
          заказать
        </button>
      </div>
    </div>
  );
}

export default Cart;
