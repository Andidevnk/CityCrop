import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CATEGORIES } from 'shared/constants';
import CategoryCard from './CategoryCard';

const PlantCategoriesScreen = () => {
  const moduleType = 'greens';
  const categories = CATEGORIES.filter(({ type }) => type === moduleType);
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <CategoryCard
          key={category.id}
          style={{
            height: '20%',
            ...(index !== categories.length - 1 && { marginBottom: 25 }),
          }}
          category={category}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#F5F8F5',
  },
});

export default PlantCategoriesScreen;
