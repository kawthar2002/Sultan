import { Dispatch, SetStateAction } from 'react';
import json from '../mock_api.json';

export const isNill = (value: unknown) => {
  return value === null || value === undefined;
};

export type CareType = 'body' | 'face' | 'hands' | 'feet' | 'hair' | 'mouth';
export type Good = {
  id: number;
  img_url: string;
  name: string;
  size: {
    unit: 'г' | 'мл';
    amount: number;
  };
  barcode: number;
  manufacturer: string;
  brand: string;
  description: string;
  price: {
    currency: string;
    amount: number;
  };
  care_types: CareType[];
};

export const fetchOne = async (
  id: number,
  setState: Dispatch<SetStateAction<Good | undefined>>
): Promise<void> => {
  const item = (json.goods as Good[]).find((good: Good) => good?.id === id);

  setState(item);
};

export const fetchMany = async (
  setState: Dispatch<SetStateAction<Good[]>>
): Promise<void> => {
  setState((json?.goods as Good[]) ?? []);
};

export const sortTypes = [
  { value: 'name_asc', label: 'Название А-Я' },
  { value: 'price_asc', label: 'Сначала недорогие ' },
  { value: 'name_desc', label: 'Название Я-А' },
  { value: 'price_desc', label: 'Сначала дорогие' },
] as const;
export type Sort = typeof sortTypes[number]['value'];

export const applySort = (items: Good[], sortType: Sort) => {
  return items.sort((a, b) => {
    switch (sortType) {
      case 'name_asc':
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      case 'price_asc':
        if (a.price.amount < b.price.amount) {
          return -1;
        }
        if (a.price.amount > b.price.amount) {
          return 1;
        }
        return 0;
      case 'name_desc':
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      case 'price_desc':
        if (a.price.amount > b.price.amount) {
          return -1;
        }
        if (a.price.amount < b.price.amount) {
          return 1;
        }
        return 0;
      default:
        return 0;
    }
  });
};
