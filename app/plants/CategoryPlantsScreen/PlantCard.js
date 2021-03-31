import React from 'react';
import { StyleSheet, Pressable, Image, Text } from 'react-native';

import { ShadowStyles } from 'shared/styles';

const PlantCard = ({ style, plant, onPress }) => {
  const { name, image } = plant;
  return (
    <Pressable
      style={[styles.container, ShadowStyles.shadow2, style]}
      onPress={() => onPress(plant)}
    >
      <Image style={styles.image} source={image} resizeMode="contain" />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    color: '#18191F',
  },
});

export default PlantCard;
