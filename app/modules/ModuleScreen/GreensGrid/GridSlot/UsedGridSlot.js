import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

import { ShadowStyles } from 'shared/styles';
import { getPlantImage } from 'shared/utilities';

const UsedGridSlot = ({ style, plant, onPress }) => {
  const { name, plantId } = plant;
  return (
    <View style={style}>
      <Pressable
        style={[styles.contentContainer, ShadowStyles.shadow2]}
        onPress={() => onPress(plant)}
      >
        <View style={styles.plantImageContainer}>
          <Image
            style={styles.image}
            source={getPlantImage(plantId)}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    alignSelf: 'flex-start',
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
  },
  plantImageContainer: {
    height: 48,
    padding: 5,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 10,
    color: '#000000',
  },
});

export default UsedGridSlot;
