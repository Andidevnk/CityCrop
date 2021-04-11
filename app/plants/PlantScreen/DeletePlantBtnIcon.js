import React from 'react';
import { StyleSheet, View, Pressable, ActivityIndicator } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

const DeletePlantBtnIcon = ({ loading, onPress }) => (
  <View style={styles.container}>
    {loading ? (
      <ActivityIndicator size="large" color="#0B7B03" />
    ) : (
      <Pressable
        android_ripple={{ color: 'rgba(0, 0, 0, .32)', borderless: true }}
        onPress={onPress}
      >
        <ScalableImage
          style={styles.icon}
          source={require('assets/icons/trash-can.png')}
          resizeMode="contain"
        />
      </Pressable>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginVertical: 3,
    marginHorizontal: 11,
    zIndex: 0,
  },
  icon: {
    width: 24,
    height: 24,
    margin: 6,
  },
});

export default DeletePlantBtnIcon;
