import React from 'react';
import { StyleSheet, View, Pressable, Image } from 'react-native';

const UserProfileImagePicker = ({ style, onPickImagePress, ...restProps }) => {
  return (
    <View style={[{ alignSelf: 'flex-start' }, style]} {...restProps}>
      <Image
        style={styles.image}
        source={require('assets/imgs/user-profile-placeholder.png')}
      />
      <Pressable style={styles.iconButton} onPress={onPickImagePress}>
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={require('assets/icons/camera.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 124,
    height: 124,
    borderWidth: 3,
    borderRadius: 124 / 2,
    borderColor: '#0B7B03',
  },
  iconButton: {
    position: 'absolute',
    right: 2,
    bottom: -5,
    padding: 10,
    borderRadius: (22 + 2 * 10) / 2, // height of icon + padding top bottom / 2
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      height: 1,
    },
    shadowOpacity: 0.15,
  },
  icon: { width: 22, height: 22 },
});

export default UserProfileImagePicker;
