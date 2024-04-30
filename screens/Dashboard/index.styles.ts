import { StyleSheet } from 'react-native';

import { colors } from '~/constants/theme';

export const styles = StyleSheet.create({
  container: { backgroundColor: colors.surfaceBackground, gap: 16 },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 8,
  },
  section: {
    padding: 8,
    backgroundColor: colors.sectionBackground,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  item: { padding: 8, gap: 8 },
  itemTitle: { fontWeight: 'bold', fontSize: 16 },
  itemDescription: {},
  itemImage: { flex: 1, aspectRatio: 16 / 9, borderRadius: 8 },
});
