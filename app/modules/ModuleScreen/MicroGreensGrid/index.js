import React from 'react';
import { StyleSheet, View } from 'react-native';

import GridSlot from './GridSlot';

const MicroGreensGrid = ({ plants, onGridSlotPress, onEmptyGridSlotPress }) => {
  return (
    <>
      <View style={[styles.row, { marginBottom: 30 }]}>
        <GridSlot
          style={{ marginRight: 30 }}
          name={plants[0].name}
          cutoffPosition="bottom-right"
          onGridSlotPress={onGridSlotPress}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
        <GridSlot
          name={plants[1].name}
          cutoffPosition="bottom-left"
          onGridSlotPress={onGridSlotPress}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
      </View>
      <View style={styles.row}>
        <GridSlot
          style={{ marginRight: 30 }}
          name={plants[2].name}
          cutoffPosition="top-right"
          onGridSlotPress={onGridSlotPress}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
        <GridSlot
          cutoffPosition="top-left"
          onGridSlotPress={onGridSlotPress}
          onEmptyGridSlotPress={onEmptyGridSlotPress}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default MicroGreensGrid;
