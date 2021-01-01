import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ iconStyle, name, size, color, ...restProps }) => (
  <TouchableOpacity {...restProps}>
    <Ionicons style={iconStyle} name={name} size={size} color={color} />
  </TouchableOpacity>
);

export default IconButton;
