import React from 'react';
import { Pressable, TextInput } from 'react-native';

const PressableTextInput = ({ containerStyle, onPress, ...rest }) => (
  // pointerEvents: box-only allows Pressable to be pressed but not its subviews
  <Pressable style={containerStyle} pointerEvents="box-only" onPress={onPress}>
    <TextInput {...rest} />
  </Pressable>
);

export default PressableTextInput;
