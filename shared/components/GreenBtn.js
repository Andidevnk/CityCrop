import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

function GreenBtn({ title, ...restProps }) {
  return (
    <TouchableHighlight
      style={styles.button}
      activeOpacity={0.9}
      underlayColor="#4bad01"
      {...restProps}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: '#59C901',
    borderRadius: 25,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default GreenBtn;
