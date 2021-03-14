import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

function IconTextInput({ style, iconImage, ...restProps }) {
  return (
    <View style={[styles.container, style]}>
      {iconImage && (
        <ScalableImage
          style={styles.iconImage}
          source={iconImage}
          resizeMode="contain"
          fadeDuration={0}
        />
      )}
      <TextInput style={styles.input} {...restProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 28,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
  },
  iconImage: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default IconTextInput;
