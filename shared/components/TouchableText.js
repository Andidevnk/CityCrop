import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function TouchableText({ textStyle, children, ...restProps }) {
  return (
    <TouchableOpacity activeOpacity={0.5} {...restProps}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}

export default TouchableText;
