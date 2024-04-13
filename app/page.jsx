import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart';
import Products from './components/Products';
import Reviews from './components/Reviews';

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Reviews />
      <Cart />
      <Products />
    </>
  );
}
