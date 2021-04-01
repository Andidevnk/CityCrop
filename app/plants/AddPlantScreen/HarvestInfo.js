import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

const HarvestInfo = ({ style, days }) => (
  <View style={[styles.container, style]}>
    <ScalableImage
      style={styles.image}
      source={require('assets/icons/tall-plant-pot.png')}
      resizeMode="contain"
    />
    <Text style={styles.text}>Harvest</Text>
    <Text style={styles.text}>{days} days</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: 50,
  },
  text: {
    fontSize: 14,
    color: '#18191F',
  },
});

export default HarvestInfo;
