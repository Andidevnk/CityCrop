import React from 'react';
import { Image, Pressable } from 'react-native';

const EmptyGridSlot = ({ style, onPress }) => (
  <Pressable style={style} onPress={onPress}>
    <Image
      style={{ width: 50, height: 50 }}
      source={require('assets/icons/large-plus.png')}
    />
  </Pressable>
);

export default EmptyGridSlot;
