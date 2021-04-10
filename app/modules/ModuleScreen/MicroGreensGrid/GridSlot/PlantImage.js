import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const PlantImage = ({ style, source }) => (
  <View style={[styles.imageContainer, style]}>
    <Image style={styles.image} source={source} resizeMode="contain" />
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default PlantImage;
