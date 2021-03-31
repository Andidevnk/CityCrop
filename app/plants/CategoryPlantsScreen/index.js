import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { PLANTS } from 'shared/constants';
import PlantCard from './PlantCard';

const CategoryPlantsScreen = ({
  navigation,
  route: {
    params: { categoryId },
  },
}) => {
  const plants = PLANTS.filter((plant) => plant.categoryId === categoryId);

  const navigateToAddPlant = (plant) => {
    navigation.navigate('Add Plant', {
      plantId: plant.id,
      plantName: plant.name,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.plantsList}
        data={plants}
        renderItem={({ item: plant, index }) => (
          <PlantCard
            style={{
              marginBottom: index !== plants.length - 1 ? 25 : 0,
            }}
            plant={plant}
            onPress={navigateToAddPlant}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8F5',
  },
  plantsList: {
    paddingVertical: 40,
    paddingHorizontal: 32,
  },
});

export default CategoryPlantsScreen;
