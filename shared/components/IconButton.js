import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const defaultRippleConfig = {
  color: 'rgba(0, 0, 0, .32)',
  borderless: true,
};
const defaultHitSlop = 20; // Extra area in which touch is detected

const IconButton = ({ iconStyle, name, size, color, ...restProps }) => (
  <Pressable
    android_ripple={defaultRippleConfig}
    hitSlop={defaultHitSlop}
    {...restProps}
  >
    <Ionicons style={iconStyle} name={name} size={size} color={color} />
  </Pressable>
);

export default IconButton;
