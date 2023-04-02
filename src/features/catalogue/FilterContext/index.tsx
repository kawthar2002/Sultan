import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { Good, isNill } from '../../../lib';

type Filters = {
  manufacturers: string[];
  brands: string[];
  priceRange: { from?: number; to?: number };
  careTypes: string[];
};
type FilterMutations = {
  updateFilters: (field: FiltersField, value: string) => void;
  setPriceRange: (priceRange: Filters['priceRange']) => void;
  applyFilters: (items: Good[]) => Good[];
};
type Context = FilterMutations & Filters;

type FiltersField = keyof Pick<
  Filters,
  'brands' | 'manufacturers' | 'careTypes'
>;

const EMPTY_FILTERS: Filters = {
  brands: [],
  manufacturers: [],
  priceRange: {},
  careTypes: [],
};

const context = createContext<Context>({
  ...EMPTY_FILTERS,
  updateFilters: () => {},
  setPriceRange: () => {},
  applyFilters: () => {
    return [];
  },
});

const isPriceRange = (obj: unknown): obj is Filters['priceRange'] => {
  if (isNill(obj)) return false;
  if (typeof obj !== 'object') return false;

  return !!(
    obj &&
    (('from' in obj && typeof obj.from === 'number') ||
      ('to' in obj && typeof obj.to === 'number'))
  );
};

export const FilterContext: FC<PropsWithChildren> = ({ children }) => {
  const [filters, setFilters] = useState(EMPTY_FILTERS);

  const updateFilters = (field: FiltersField, value: string) => {
    setFilters((prevFilters) => {
      if (prevFilters[field].includes(value)) {
        return {
          ...prevFilters,
          [field]: prevFilters[field].filter((item) => item !== value),
        };
      }

      return {
        ...prevFilters,
        [field]: [...prevFilters[field], value],
      };
    });
  };

  const setPriceRange = (priceRange: Filters['priceRange']) => {
    setFilters((prevFilters) => {
      if (isNill(priceRange.from)) {
        priceRange.from = prevFilters.priceRange.from;
      }
      if (isNill(priceRange.to)) {
        priceRange.to = prevFilters.priceRange.to;
      }
      return {
        ...prevFilters,
        priceRange: {
          from: priceRange.from === 0 ? undefined : priceRange.from,
          to: priceRange.to === 0 ? undefined : priceRange.to,
        },
      };
    });
  };

  const applyFilters = (items: Good[]) => {
    for (const [key, value] of Object.entries(filters)) {
      if (isPriceRange(value)) {
        items = items.filter((card) => {
          if (value.from && value.to) {
            return (
              card.price.amount >= value.from && card.price.amount <= value.to
            );
          }
          if (value.from) {
            return card.price.amount >= value.from;
          }
          if (value.to) {
            return card.price.amount <= value.to;
          }
          return true;
        });
      }

      if (Array.isArray(value) && value.length > 0) {
        items = items.filter((item) => {
          const itemKey: keyof Good = key.slice(0, -1) as keyof Good;

          let val = item[itemKey];
          if (typeof val === 'string') {
            return value.includes(val);
          }

          val = item['care_types'];
          if (typeof val === 'object' && Array.isArray(val)) {
            return val.some((item) => value.includes(item));
          }
        });
      }
    }

    return items;
  };

  return (
    <context.Provider
      value={{ ...filters, updateFilters, setPriceRange, applyFilters }}
    >
      {children}
    </context.Provider>
  );
};

export const useFilterContext = () => {
  const ctx = useContext(context);
  return ctx;
};
