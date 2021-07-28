import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

const DurationInfo = ({ style, source, name, duration }) => (
  <View style={[styles.container, style]}>
    <ScalableImage style={styles.image} source={source} resizeMode="contain" />
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.durationText}>{duration} days</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: 50,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#18191F',
  },
  durationText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#18191F',
  },
});

export default DurationInfo;
