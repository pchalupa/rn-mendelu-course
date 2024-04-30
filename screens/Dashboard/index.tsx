import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, SectionList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './index.styles';

import { Typography } from '~/components/Typography';
import { Section } from '~/types';

export const Dashboard = () => {
  const [data, setData] = useState<Section[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/pchalupa/rn-mendelu-course/cd82d70bb2d91a3b6d6da4d19373935b11bfd86c/data.json'
        );
        const temp: Section[] = await response.json();

        setData(temp);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Typography style={styles.title}>Products</Typography>
      <SectionList
        sections={data}
        renderSectionHeader={({ section }) => (
          <View style={styles.section}>
            <Typography style={styles.sectionTitle}>{section.title}</Typography>
          </View>
        )}
        renderItem={({ item }) => (
          <Link href={{ pathname: `/product/${item.id}`, params: item }} asChild>
            <TouchableOpacity style={styles.item}>
              <Image src={item.image} style={styles.itemImage} />
              <Typography style={styles.itemTitle}>{item.name}</Typography>
              <Typography style={styles.itemDescription}>{item.description}</Typography>
            </TouchableOpacity>
          </Link>
        )}
      />
    </SafeAreaView>
  );
};
