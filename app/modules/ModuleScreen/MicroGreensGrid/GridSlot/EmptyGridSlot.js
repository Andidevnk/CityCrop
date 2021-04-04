import React from 'react';
import { Image, View } from 'react-native';

const EmptyGridSlot = ({ style }) => (
  <View style={style}>
    <Image
      style={{ width: 50, height: 50 }}
      source={require('assets/icons/large-plus.png')}
    />
  </View>
);

export default EmptyGridSlot;
