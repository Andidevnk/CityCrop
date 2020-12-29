import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

function IconTextInput({ style, iconImage, ...restProps }) {
  return (
    <View
      style={{
        ...styles.container,
        ...style,
      }}
    >
      <Image
        style={styles.iconImage}
        source={iconImage}
        fadeDuration={0}
        resizeMode="contain"
      />
      <TextInput style={styles.input} {...restProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  iconImage: {
    height: 20,
    position: 'absolute',
    left: 30,
    zIndex: 1,
  },
  input: {
    borderRadius: 15,
    paddingVertical: 18,
    paddingLeft: 75,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
});

export default IconTextInput;
