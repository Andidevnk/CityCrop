import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

function LightGreenBtn({ style, title, disabled = false, ...restProps }) {
  return (
    <TouchableHighlight
      style={{
        ...styles.button,
        ...style,
      }}
      activeOpacity={0.9}
      underlayColor="#4bad01"
      disabled={disabled}
      {...restProps}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    padding: 16,
    backgroundColor: '#59C901',
    borderRadius: 27,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default LightGreenBtn;
