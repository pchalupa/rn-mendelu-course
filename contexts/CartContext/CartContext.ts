import { createContext } from 'react';

import { Product } from '~/types';

export const CartContext = createContext<{
  products: Product[];
  addToCart?: (product: Product) => void;
}>({ products: [] });
