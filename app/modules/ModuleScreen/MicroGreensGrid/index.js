import React from 'react';
import { StyleSheet, View } from 'react-native';

import GridSlot from './GridSlot';

const MicroGreensGrid = ({ plants }) => {
  return (
    <>
      <View style={[styles.row, { marginBottom: 30 }]}>
        <GridSlot
          style={{ marginRight: 30 }}
          name={plants[0].name}
          cutoffPosition="bottom-right"
        />
        <GridSlot name={plants[1].name} cutoffPosition="bottom-left" />
      </View>
      <View style={styles.row}>
        <GridSlot
          style={{ marginRight: 30 }}
          name={plants[2].name}
          cutoffPosition="top-right"
        />
        <GridSlot cutoffPosition="top-left" />
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
