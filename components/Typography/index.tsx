import { type TextProps, Text } from 'react-native';

import { styles } from './index.styles';

export const Typography = ({ style, ...props }: TextProps) => (
  <Text style={[styles.container, style]} {...props} />
);
