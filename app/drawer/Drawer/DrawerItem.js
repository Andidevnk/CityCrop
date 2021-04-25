import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

const DrawerItem = ({ label, icon, ...restProps }) => {
  return (
    <Pressable style={styles.drawerItem} {...restProps}>
      <ScalableImage style={styles.icon} source={icon} resizeMode="contain" />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(190, 190, 190, 0.5)',
  },
  icon: {
    width: 15,
    marginRight: 15,
    marginLeft: 5,
  },
  label: {
    fontSize: 15,
    color: '#18191F',
  },
});

export default DrawerItem;
