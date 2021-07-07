import React from 'react';
import { StyleSheet, View } from 'react-native';

import TrayOption from './TrayOption';

const TraySelector = ({ style, value, onOptionPress }) => (
  <View style={[styles.row, style]}>
    <View style={styles.column}>
      <TrayOption
        title="Greens"
        image={require('assets/imgs/tray/greens.png')}
        selected={value === 'greens'}
        onPress={() => onOptionPress('greens')}
      />
    </View>
    <View style={styles.column}>
      <TrayOption
        title="Microgreens"
        image={require('assets/imgs/tray/microgreens.png')}
        selected={value === 'microgreens'}
        onPress={() => onOptionPress('microgreens')}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
});

export default TraySelector;
