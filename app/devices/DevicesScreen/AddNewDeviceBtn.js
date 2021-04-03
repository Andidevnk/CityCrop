import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

const AddNewDeviceBtn = () => (
  <TouchableOpacity style={styles.addDeviceBtn}>
    <Text style={styles.addDeviceText}>Add a new device</Text>
    <ScalableImage
      style={styles.addDeviceIcon}
      source={require('assets/icons/plus.png')}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  addDeviceBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#0B7B03',
  },
  addDeviceText: {
    fontSize: 16,
    color: '#0B7B03',
  },
  addDeviceIcon: {
    height: 24,
  },
});

export default AddNewDeviceBtn;
