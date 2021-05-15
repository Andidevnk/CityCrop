import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ScalableImage from 'shared/components/ScalableImage';

const SectionBtn = ({ style, icon, title, ...rest }) => (
  <TouchableOpacity style={[styles.container, style]} {...rest}>
    <ScalableImage style={styles.icon} source={icon} />
    <Text style={styles.title}>{title}</Text>
    <Ionicons
      style={styles.arrowIcon}
      name="chevron-forward"
      size={26}
      color="#59C901"
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#0B7B03',
  },
  icon: {
    height: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#18191F',
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
});

export default SectionBtn;
