import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { CardStyles } from 'shared/styles';

const SetupDeviceCard = () => (
  <View style={[CardStyles.card, { marginBottom: 0 }]}>
    <Image
      style={styles.image}
      source={require('assets/imgs/devices-modules/2-module-device-side.png')}
      fadeDuration={0}
      resizeMode="contain"
    />
    <Text style={styles.topText}>Just Received You CityCrop?</Text>
    <Text>Setup your CityCrop and start growing.</Text>
  </View>
);

const styles = StyleSheet.create({
  image: {
    height: 80,
    marginBottom: 35,
  },
  topText: {
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#0B7B03',
  },
});

export default SetupDeviceCard;
