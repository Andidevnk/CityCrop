import React from 'react';
import { StyleSheet, View } from 'react-native';

import Measurement from './Measurement';

const Measurements = ({ style }) => {
  return (
    <View style={style}>
      <View style={styles.row}>
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/temperature.png')}
          name="TEMPERATURE"
          formattedValue="34°C"
        />
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/droplet.png')}
          name="HUMIDITY"
          formattedValue="34°C"
        />
      </View>
      <View style={styles.row}>
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/ec.png')}
          name="EC"
          formattedValue="34°C"
        />
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/wave.png')}
          name="WATER LEVEL"
          formattedValue="34°C"
        />
      </View>
      <View style={styles.row}>
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/clouds.png')}
          name="CO2"
          formattedValue="34°C"
        />
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/ph.png')}
          name="PH"
          formattedValue="34°C"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  measurement: {
    flex: 1,
    paddingLeft: 20,
  },
});

export default Measurements;
