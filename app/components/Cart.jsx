import Form from './Form';

function Cart() {
  return (
    <div className='cart'>
      <p className='cart-title'>Добавленные товары</p>
      <div className='cart-detail'>
        <p>товар 1</p>
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
