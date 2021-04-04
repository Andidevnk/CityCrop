import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import RectangleWithCutoff from '../RectangleWithCutoff';

const UsedGridSlot = ({ style, plant, cardHeight, cutoffPosition }) => {
  const { name } = plant;
  const showTitleOnTop =
    cutoffPosition === 'bottom-right' || cutoffPosition === 'bottom-left';
  return (
    <View style={[style, { height: cardHeight }]}>
      {showTitleOnTop && <PlantName name={name} />}
      <RectangleWithCutoff
        cutoffPosition={cutoffPosition}
        height={cardHeight - 36}
        backgroundColor="#FFFFFF"
      />
      {!showTitleOnTop && <PlantName name={name} />}
    </View>
  );
};

const PlantName = ({ name }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 12,
  },
  title: {
    fontSize: 14,
    color: '#000000',
  },
});

export default UsedGridSlot;
