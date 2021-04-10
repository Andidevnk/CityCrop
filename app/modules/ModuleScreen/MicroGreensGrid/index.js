import React from 'react';
import { StyleSheet, View } from 'react-native';

import GridSlot from './GridSlot';

const findPlantByPosition = (plants, position) =>
  plants.find((plant) => plant.position === position);

const MicroGreensGrid = ({ plants, onUsedSlotPress, onEmptySlotPress }) => (
  <>
    <View style={[styles.row, { marginBottom: 30 }]}>
      <GridSlot
        style={{ marginRight: 30 }}
        plant={findPlantByPosition(plants, 1)}
        cutoffPosition="bottom-right"
        onUsedSlotPress={onUsedSlotPress}
        onEmptySlotPress={() => onEmptySlotPress(1)}
      />
      <GridSlot
        plant={findPlantByPosition(plants, 2)}
        cutoffPosition="bottom-left"
        onUsedSlotPress={onUsedSlotPress}
        onEmptySlotPress={() => onEmptySlotPress(2)}
      />
    </View>
    <View style={styles.row}>
      <GridSlot
        style={{ marginRight: 30 }}
        plant={findPlantByPosition(plants, 3)}
        cutoffPosition="top-right"
        onUsedSlotPress={onUsedSlotPress}
        onEmptySlotPress={() => onEmptySlotPress(3)}
      />
      <GridSlot
        plant={findPlantByPosition(plants, 4)}
        cutoffPosition="top-left"
        onUsedSlotPress={onUsedSlotPress}
        onEmptySlotPress={() => onEmptySlotPress(4)}
      />
    </View>
  </>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default MicroGreensGrid;
