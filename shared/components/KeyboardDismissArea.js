import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const KeyboardDismissArea = ({ children, ...restProps }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} {...restProps}>
    {children}
  </TouchableWithoutFeedback>
);

export default KeyboardDismissArea;
