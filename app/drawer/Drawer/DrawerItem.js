import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

const DrawerItem = ({ label, icon, ...restProps }) => {
  return (
    <Pressable style={styles.drawerItem} {...restProps}>
      <ScalableImage
        style={{
          width: 15,
          marginRight: 15,
          marginLeft: 5,
        }}
        source={icon}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 15, color: '#18191F' }}>{label}</Text>
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
});

export default DrawerItem;
