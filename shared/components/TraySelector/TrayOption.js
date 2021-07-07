import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

const TrayOption = ({ title, image, selected, onPress }) => (
  <Pressable
    style={[styles.trayOption, selected ? [styles.selected] : []]}
    onPress={onPress}
  >
    <Text style={styles.title}>{title}</Text>
    <ScalableImage style={styles.image} source={image} />
  </Pressable>
);

const styles = StyleSheet.create({
  trayOption: {
    // padding: ,
    paddingTop: 12,
    alignItems: 'center',
    borderRadius: 26,
  },
  selected: {
    backgroundColor: '#EEEEEE',
  },
  title: {
    fontSize: 18,
    color: '#18191F',
  },
  image: {
    height: 150,
  },
});

export default TrayOption;
