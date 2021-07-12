import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

const TrayOption = ({ style, title, image, selected, onPress }) => (
  <Pressable
    style={[
      styles.trayOption,
      selected ? [styles.trayOptionSelected] : [],
      style,
    ]}
    onPress={onPress}
  >
    <Text style={[styles.title, selected ? [styles.titleSelected] : []]}>
      {title}
    </Text>
    <ScalableImage style={styles.image} source={image} />
  </Pressable>
);

const styles = StyleSheet.create({
  trayOption: {
    paddingTop: 12,
    paddingBottom: 5,
    alignItems: 'center',
    borderRadius: 15,
  },
  trayOptionSelected: {
    backgroundColor: 'rgba(89, 201, 1, 0.6)',
  },
  title: {
    fontSize: 18,
    color: '#000000',
  },
  titleSelected: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  image: {
    height: 120,
  },
});

export default TrayOption;
