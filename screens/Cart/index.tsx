import { useContext } from 'react';
import { FlatList } from 'react-native';

import { Typography } from '~/components/Typography';
import { CartContext } from '~/contexts/CartContext/CartContext';

export const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <>
      <FlatList data={products} renderItem={({ item }) => <Typography>{item.name}</Typography>} />
    </>
  );
};
