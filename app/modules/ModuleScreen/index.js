import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Measurements from './Measurements';
import GreensGrid from './GreensGrid';
import MicroGreensGrid from './MicroGreensGrid';

const plants = [
  {
    id: 0,
    name: 'Arugula',
    img: null,
  },
  {
    id: 1,
    name: 'Swiss Chard',
    img: null,
  },
  {
    id: 2,
    name: 'Parsley',
    img: null,
  },
  {
    id: 3,
    name: 'Lettuce',
    img: null,
  },
];
const gridType = 'greens';

const ModuleScreen = () => {
  return (
    <View style={styles.container}>
      <Measurements />
      <Text style={styles.plantsGridTitle}>Your plants</Text>
      {gridType === 'greens' ? (
        <GreensGrid plants={plants} />
      ) : (
        <MicroGreensGrid plants={plants} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 28,
    paddingHorizontal: 20,
    backgroundColor: '#F5F8F5',
  },
  plantsGridTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#18191F',
    marginBottom: 30,
  },
});

export default ModuleScreen;
