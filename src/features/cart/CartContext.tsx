import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';
import { Good } from '../../lib';

type CartMutations = {
  add: (item: Good) => void;
  removeOne: (itemId: Good['id']) => void;
  removeMany: (itemId: Good['id']) => void;
  wipe: () => void;
};
type CartState = {
  goods: {
    id: number;
    item: Good;
    count: number;
    price: number;
  }[];
};
type CartContext = CartMutations & CartState;

const EMPTY_CONTEXT: CartContext = {
  add: () => {},
  removeOne: () => {},
  removeMany: () => {},
  wipe: () => {},
  goods: [],
};

const context = createContext<CartContext>(EMPTY_CONTEXT);

export const CartContext: FC<PropsWithChildren> = ({ children }) => {
  const [goods, setGoods] = useState<CartState['goods']>([]);

  const add = useCallback((item: Good) => {
    console.log('render???');
    setGoods((prevGoods) => {
      const itemIdx = prevGoods.findIndex((value) => value.id === item.id);
      console.log('render???????????');

      if (itemIdx > -1) {
        const array = JSON.parse(JSON.stringify(prevGoods));
        array[itemIdx] = {
          ...prevGoods[itemIdx],
          count: prevGoods[itemIdx].count + 1,
          price:
            prevGoods[itemIdx].price + prevGoods[itemIdx].item.price.amount,
        };

        return [...array];
      }

      return [
        ...prevGoods,
        { id: item.id, item, count: 1, price: item.price.amount },
      ];
    });
  }, []);

  const removeOne = (itemId: number) => {
    setGoods((prevGoods) => {
      const itemIdx = prevGoods.findIndex((item) => item.id === itemId);

      const array = JSON.parse(JSON.stringify(prevGoods));
      array[itemIdx] = {
        ...prevGoods[itemIdx],
        count: prevGoods[itemIdx].count - 1,
        price: prevGoods[itemIdx].price - prevGoods[itemIdx].item.price.amount,
      };

      if (array[itemIdx].count === 0) {
        const values = array.filter((item: Good) => item.id !== itemId);

        return [...values];
      }

      return [...array];
    });
  };

  const removeMany = (itemId: number) => {
    setGoods((prevGoods) => {
      return prevGoods.filter((item) => item.id !== itemId);
    });
  };

  const wipe = () => {
    setGoods([]);
  };

  return (
    <context.Provider value={{ goods, add, removeOne, removeMany, wipe }}>
      {children}
    </context.Provider>
  );
};

export const useCartContext = () => {
  const ctx = useContext(context);
  return ctx;
};
