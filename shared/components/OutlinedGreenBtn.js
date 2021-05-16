import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

const OutlinedGreenBtn = ({ style, icon, title, ...rest }) => (
  <TouchableHighlight
    style={[styles.container, style]}
    underlayColor="#EEEEEE"
    {...rest}
  >
    <>
      <ScalableImage style={styles.icon} source={icon} />
      <Text style={styles.text}>{title}</Text>
    </>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#0B7B03',
    borderRadius: 27,
  },
  icon: {
    height: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#0B7B03',
  },
});

export default OutlinedGreenBtn;
