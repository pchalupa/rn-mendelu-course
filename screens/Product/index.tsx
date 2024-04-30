import { Stack, useLocalSearchParams } from 'expo-router';
import { useContext } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { styles } from './index.styles';

import { Typography } from '~/components/Typography';
import { CartContext } from '~/contexts/CartContext/CartContext';
import { type Product as TProduct } from '~/types';

interface ProductProps {}
export const Product = (props: ProductProps) => {
  const data = useLocalSearchParams<TProduct>();
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Stack.Screen options={{ title: data.name }} />
      <Image src={data.image} style={styles.image} resizeMode="cover" />
      <Typography>{data.name}</Typography>
      <Typography>{data.description}</Typography>
      <TouchableOpacity onPress={() => addToCart?.(data)}>
        <Typography>Add to cart</Typography>
      </TouchableOpacity>
    </>
  );
};
