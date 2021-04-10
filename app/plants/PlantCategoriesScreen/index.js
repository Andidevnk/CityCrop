import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from 'shared/constants';
import { selectModule } from 'shared/store/modules/selectors';
import CategoryCard from './CategoryCard';

const PlantCategoriesScreen = ({
  navigation,
  route: {
    params: { deviceId, moduleId, gridPosition },
  },
}) => {
  const moduleType = useSelector(selectModule(deviceId, moduleId)).tray;
  const categories = CATEGORIES.filter(({ type }) => type === moduleType);

  const navigateToPlants = (categoryId) => {
    navigation.navigate('Category Plants', {
      categoryId,
      // Props for Add Plant screen
      deviceId,
      moduleId,
      gridPosition,
    });
  };

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
          onPress={navigateToPlants}
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
