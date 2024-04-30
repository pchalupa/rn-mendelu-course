import { PropsWithChildren, useState } from 'react';

import { CartContext } from './CartContext';

import { Product } from '~/types';

export const CartProvider = (props: PropsWithChildren) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setProducts((current) => [...current, product]);
  };

  return (
    <CartContext.Provider value={{ products, addToCart }}>{props.children}</CartContext.Provider>
  );
};
