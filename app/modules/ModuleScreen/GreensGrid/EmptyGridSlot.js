import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const EmptyGridSlot = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.icon}
        source={require('assets/icons/plus.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  icon: {
    width: 18,
    height: 18,
  },
});

export default EmptyGridSlot;
