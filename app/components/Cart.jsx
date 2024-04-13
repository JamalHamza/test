'use client';

import { useAppContext } from '../../context';
import Form from './Form';

function Cart() {
  const { cart } = useAppContext();

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
            return (
              <div key={item.index}>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: {item.quantity * item.price}</p>
              </div>
            );
          })
        )}
      </div>
      <div className='form'>
        <>
          <Form />
        </>
        <button className='form-btn'>заказать</button>
      </div>
    </div>
  );
}

export default Cart;
