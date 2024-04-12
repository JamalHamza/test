

import Image from 'next/image';
import BuyButton from './Buttons/BuyButton';

async function fetchData() {
  const res = await fetch(
    'http://o-complex.com:1337/products?page=1&page_size=20'
  );
  const data = await res.json();
  return data;
}

async function Products() {
  const productsList = await fetchData();


  return (
    <>
      {productsList?.products.map((product) => {
        const { id, image_url, title, description, price } = product;

        return (
          <div className='product-card' key={id}>
            <Image
              src={image_url}
              alt='Picture of the author'
              width={400}
              height={500}
              className='img'
            />
            <p className='product-title'>{title}</p>
            <p className='product-description'>{description}</p>
            <p className='product-price'> цена: {price}₽</p>

            <div>
              <BuyButton />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Products;
