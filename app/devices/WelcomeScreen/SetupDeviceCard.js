import React from 'react';
import { StyleSheet, Text, Image, Pressable } from 'react-native';

import { CardStyles } from 'shared/styles';

const SetupDeviceCard = ({ onPress }) => (
  <Pressable style={[CardStyles.card, { marginBottom: 0 }]} onPress={onPress}>
    <Image
      style={styles.image}
      source={require('assets/imgs/devices-modules/2-module-device-side.png')}
      fadeDuration={0}
      resizeMode="contain"
    />
    <Text style={styles.topText}>Just Received You CityCrop?</Text>
    <Text>Setup your CityCrop and start growing.</Text>
  </Pressable>
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
