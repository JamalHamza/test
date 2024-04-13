'use client';

import { useAppContext } from '../../context';
import Form from './Form';

function Cart() {
  const { quantity } = useAppContext();


  return (
    <div className='cart'>
      <p className='cart-title'>Добавленные товары</p>
      <div className='cart-detail'>
        <p>{quantity}</p>
        <p>x4</p>
        <p>4444</p>
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
