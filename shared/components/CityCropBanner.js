import React from 'react';
import { StyleSheet, Image } from 'react-native';

const CityCropBanner = ({ style }) => (
  <Image
    style={[styles.image, style]}
    source={require('assets/logos/citycrop-green.png')}
    resizeMode="contain"
  />
);

const styles = StyleSheet.create({
  image: {
    width: '80%',
    alignSelf: 'center',
  },
});

export default CityCropBanner;
