import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import RectangleWithCutoff from '../RectangleWithCutoff';

const UsedGridSlot = ({
  style,
  plant,
  cardHeight,
  cutoffPosition,
  onPress,
}) => {
  const { name } = plant;
  const showTitleOnTop =
    cutoffPosition === 'bottom-right' || cutoffPosition === 'bottom-left';
  return (
    <Pressable
      style={[style, { height: cardHeight }]}
      onPress={() => onPress(plant)}
    >
      {showTitleOnTop && <PlantName name={name} />}
      <RectangleWithCutoff
        cutoffPosition={cutoffPosition}
        height={cardHeight - 36}
        backgroundColor="#FFFFFF"
      />
      {!showTitleOnTop && <PlantName name={name} />}
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
