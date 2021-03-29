import React from 'react';
import { StyleSheet, View } from 'react-native';

import GridSlot from './GridSlot';

const GreensGrid = ({ plants, onEmptyGridSlotPress }) => {
  return (
    <View>
      <View style={styles.row}>
        <GridSlot
          style={styles.gridSlot}
          name={plants[0].name}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
        <GridSlot
          style={styles.gridSlot}
          name={plants[0].name}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
        <GridSlot
          style={styles.gridSlot}
          name={plants[0].name}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
      </View>
      <View style={[styles.row, { marginTop: -20 }]}>
        <GridSlot
          style={styles.leftGridSlot}
          name={plants[0].name}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
        <GridSlot
          style={styles.rightGridSlot}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
      </View>
      <View style={[styles.row, { marginTop: -20 }]}>
        <GridSlot
          style={styles.gridSlot}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
        <GridSlot
          style={styles.gridSlot}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
        <GridSlot
          style={styles.gridSlot}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
      </View>
      <View style={[styles.row, { marginTop: -20 }]}>
        <GridSlot
          style={styles.leftGridSlot}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
        <GridSlot
          style={styles.rightGridSlot}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
      </View>
      <View style={[styles.row, { marginTop: -20 }]}>
        <GridSlot
          style={styles.gridSlot}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
        <GridSlot
          style={styles.gridSlot}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
        <GridSlot
          style={styles.gridSlot}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
      </View>
    </View>
  );
};

const GRID_SLOT_WIDTH = 18;
const MARGIN = 25 - (1 / 4) * GRID_SLOT_WIDTH;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gridSlot: {
    width: `${GRID_SLOT_WIDTH}%`,
  },
  leftGridSlot: {
    width: `${GRID_SLOT_WIDTH}%`,
    marginLeft: `${MARGIN}%`,
  },
  rightGridSlot: {
    width: `${GRID_SLOT_WIDTH}%`,
    marginRight: `${MARGIN}%`,
  },
});

export default GreensGrid;
