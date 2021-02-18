import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function TouchableTextIcon({ style, textStyle, icon, children, ...restProps }) {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...style,
      }}
      activeOpacity={0.5}
      {...restProps}
    >
      <Text style={textStyle}>{children}</Text>
      <Ionicons name={icon} size={22} color="#59C901" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TouchableTextIcon;
