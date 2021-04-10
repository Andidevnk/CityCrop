import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import { getPlantImage } from 'shared/utilities';
import PlantImage from './PlantImage';

const UsedGridSlot = ({
  style,
  plant,
  cardHeight,
  // cutoffPosition, // TODO: Add triangle on appropriate position
  onPress,
}) => {
  const { name, plantId } = plant;
  return (
    <Pressable
      style={[style, { height: cardHeight }]}
      onPress={() => onPress(plant)}
    >
      <PlantImage
        style={{ height: cardHeight - 36 }}
        source={getPlantImage(plantId)}
      />
      <PlantName name={name} />
    </Pressable>
  );
};

const PlantName = ({ name }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.title} numberOfLines={1}>
      {name}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 14,
    color: '#000000',
  },
});

export default UsedGridSlot;
