import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

import UsedGridSlot from './UsedGridSlot';
import EmptyGridSlot from './EmptyGridSlot';

const GridSlot = ({
  style,
  plant,
  cutoffPosition,
  onUsedSlotPress,
  onEmptySlotPress,
}) => {
  const windowHeight = useWindowDimensions().height;
  const cardHeight = Math.min((windowHeight - 200) * 0.29, 150);
  return plant ? (
    <UsedGridSlot
      style={[styles.card, style]}
      plant={plant}
      cardHeight={cardHeight}
      cutoffPosition={cutoffPosition}
      onPress={onUsedSlotPress}
    />
  ) : (
    <EmptyGridSlot
      style={[styles.card, styles.centerContent, style]}
      onPress={onEmptySlotPress}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.15,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GridSlot;
