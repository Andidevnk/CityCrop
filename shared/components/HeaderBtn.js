import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';

import ScalableImage from './ScalableImage';

const HeaderBtn = ({ source, onPress }) => (
  <View style={styles.container}>
    <Pressable
      android_ripple={{ color: 'rgba(0, 0, 0, .32)', borderless: true }}
      onPress={onPress}
    >
      <ScalableImage style={styles.icon} source={source} resizeMode="contain" />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginVertical: 3,
    marginHorizontal: 11,
    zIndex: 0,
  },
  icon: {
    width: 24,
    height: 24,
    margin: 6,
  },
});

export default HeaderBtn;
