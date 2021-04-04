import React from 'react';
import { StyleSheet, View } from 'react-native';

import GridSlot from './GridSlot';

const findPlantByPosition = (plants, position) =>
  plants.find((plant) => plant.position === position);

const GreensGrid = ({ plants, onUsedSlotPress, onEmptySlotPress }) => {
  return (
    <View>
      <View style={styles.row}>
        <GridSlot
          style={styles.gridSlot}
          plant={findPlantByPosition(plants, 1)}
          onUsedSlotPress={onUsedSlotPress}
          onEmptySlotPress={onEmptySlotPress}
        />
        <GridSlot
          style={styles.gridSlot}
          plant={findPlantByPosition(plants, 2)}
          onUsedSlotPress={onUsedSlotPress}
          onEmptySlotPress={onEmptySlotPress}
        />
        <GridSlot
          style={styles.gridSlot}
          plant={findPlantByPosition(plants, 3)}
          onUsedSlotPress={onUsedSlotPress}
          onEmptySlotPress={onEmptySlotPress}
        />
      </View>
      <View style={[styles.row, { marginTop: -20 }]}>
        <GridSlot
          style={styles.leftGridSlot}
          plant={findPlantByPosition(plants, 4)}
          onUsedSlotPress={onUsedSlotPress}
          onEmptySlotPress={onEmptySlotPress}
        />
        <GridSlot
          style={styles.rightGridSlot}
          plant={findPlantByPosition(plants, 5)}
          onUsedSlotPress={onUsedSlotPress}
          onEmptySlotPress={onEmptySlotPress}
        />
      </View>
      <View style={[styles.row, { marginTop: -20 }]}>
        <GridSlot
          style={styles.gridSlot}
          plant={findPlantByPosition(plants, 6)}
          onUsedSlotPress={onUsedSlotPress}
          onEmptySlotPress={onEmptySlotPress}
        />
        <GridSlot
          style={styles.gridSlot}
          plant={findPlantByPosition(plants, 7)}
          onUsedSlotPress={onUsedSlotPress}
          onEmptySlotPress={onEmptySlotPress}
        />
        <GridSlot
          style={styles.gridSlot}
          plant={findPlantByPosition(plants, 8)}
          onUsedSlotPress={onUsedSlotPress}
          onEmptySlotPress={onEmptySlotPress}
        />
      </View>
      <View style={[styles.row, { marginTop: -20 }]}>
        <GridSlot
          style={styles.leftGridSlot}
          plant={findPlantByPosition(plants, 9)}
          onUsedSlotPress={onUsedSlotPress}
          onEmptySlotPress={onEmptySlotPress}
        />
        <GridSlot
          style={styles.rightGridSlot}
          plant={findPlantByPosition(plants, 10)}
          onUsedSlotPress={onUsedSlotPress}
          onEmptySlotPress={onEmptySlotPress}
        />
      </View>
      <View style={[styles.row, { marginTop: -20 }]}>
        <GridSlot
          style={styles.gridSlot}
          plant={findPlantByPosition(plants, 11)}
          onUsedSlotPress={onUsedSlotPress}
          onEmptySlotPress={onEmptySlotPress}
        />
        <GridSlot
          style={styles.gridSlot}
          plant={findPlantByPosition(plants, 12)}
          onUsedSlotPress={onUsedSlotPress}
          onEmptySlotPress={onEmptySlotPress}
        />
        <GridSlot
          style={styles.gridSlot}
          plant={findPlantByPosition(plants, 13)}
          onUsedSlotPress={onUsedSlotPress}
          onEmptySlotPress={onEmptySlotPress}
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
    // alignItems: 'center',
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
