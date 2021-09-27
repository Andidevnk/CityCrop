import React from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

const PhotoInput = ({ style, source, onPress, onRemovePicture }) => (
  <Pressable style={[styles.container, style]} onPress={onPress}>
    {source ? (
      <Image
        style={{ width: '100%', height: '100%', borderRadius: 10 }}
        source={source}
      />
    ) : (
      <ScalableImage
        style={styles.cameraIcon}
        source={require('assets/icons/camera-grey.png')}
        resizeMode="contain"
      />
    )}
    {source ? (
      <Pressable style={styles.plusIconContainer} onPress={onRemovePicture}>
        <ScalableImage
          style={[styles.plusIcon, { transform: [{ rotate: '45deg' }] }]}
          source={require('assets/icons/plus-circle.png')}
          resizeMode="contain"
        />
      </Pressable>
    ) : (
      <ScalableImage
        style={[styles.plusIconContainer, styles.plusIcon]}
        source={require('assets/icons/plus-circle.png')}
        resizeMode="contain"
      />
    )}
  </Pressable>
);

export default PhotoInput;

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#59C901',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    width: 40,
  },
  plusIconContainer: {
    position: 'absolute',
    bottom: -(38 / 3),
    right: -(38 / 3),
  },
  plusIcon: {
    width: 38,
    height: 38,
  },
});
