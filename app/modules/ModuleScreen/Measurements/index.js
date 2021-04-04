import React from 'react';
import { StyleSheet, View } from 'react-native';

import Measurement from './Measurement';

const Measurements = ({ style, measurements }) => {
  const { ph, tank_level, co2, humidity, temperature } = measurements;
  return (
    <View style={style}>
      <View style={styles.row}>
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/temperature.png')}
          name="TEMPERATURE"
          formattedValue={`${Math.floor(temperature)}°C`}
        />
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/droplet.png')}
          name="HUMIDITY"
          formattedValue={`${humidity}%`}
        />
      </View>
      <View style={styles.row}>
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/clouds.png')}
          name="CO2"
          formattedValue={`${co2}ppm`}
        />
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/ph.png')}
          name="PH"
          formattedValue={`${ph}`}
        />
      </View>
      <View style={styles.row}>
        {/* <Measurement
          style={styles.measurement}
          icon={require('assets/icons/ec.png')}
          name="EC"
          formattedValue={`${ec}ms`}
        /> */}
        <Measurement
          style={styles.measurement}
          icon={require('assets/icons/wave.png')}
          name="WATER LEVEL"
          formattedValue={`${tank_level}%`}
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
