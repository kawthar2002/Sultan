import { RouterProvider } from 'react-router-dom';
import { CartContext } from '../features/cart/CartContext';
import './index.css';
import { routes } from './routes';

function App() {
  return (
    <CartContext>
      <RouterProvider router={routes} />
    </CartContext>
  );
}

export default App;
