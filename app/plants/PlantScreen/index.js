import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const PlantScreen = ({
  route: {
    params: { plantId },
  },
}) => {
  // const plant = plants.find(p => p.id === plantId);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image />
      </View>
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
  imageContainer: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
});

export default PlantScreen;
