import { createHashRouter } from 'react-router-dom';
import { Cart } from '../pages/Cart';
import { Catalogue } from '../pages/Catalogue';
import { Item } from '../pages/Item';

export const routes = createHashRouter([
  {
    path: '/',
    element: <Catalogue />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/goods/:id',
    element: <Item />,
  },
]);
