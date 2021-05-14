import React from 'react';
import { StyleSheet, View } from 'react-native';

import Measurement from './Measurement';

const formatIfEmpty = (value, formattedValue) =>
  value === null || value === undefined ? '--' : formattedValue;

const Measurements = ({ style, measurements }) => {
  const { ph, tank_level, co2, humidity, temperature } = measurements;
  return (
    <View style={style}>
      <View style={styles.row}>
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/temperature.png')}
          name="TEMPERATURE"
          formattedValue={formatIfEmpty(
            temperature,
            `${temperature.toFixed(1)}°C`
          )}
        />
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/droplet.png')}
          name="HUMIDITY"
          formattedValue={formatIfEmpty(humidity, `${humidity}%`)}
        />
      </View>
      <View style={styles.row}>
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/clouds.png')}
          name="CO2"
          formattedValue={formatIfEmpty(co2, `${co2}ppm`)}
        />
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/ph.png')}
          name="PH"
          formattedValue={formatIfEmpty(ph, `${ph}`)} // Convert to string
        />
      </View>
      <View style={styles.row}>
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/wave.png')}
          name="WATER LEVEL"
          formattedValue={formatIfEmpty(tank_level, `${tank_level}%`)}
        />
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/ec.png')}
          name="EC"
          formattedValue="--"
          future
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
