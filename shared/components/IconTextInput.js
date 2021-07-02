import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

// Class component necessary for createAnimatedComponent()
class IconTextInput extends Component {
  render() {
    const {
      style,
      iconImage,
      invalid = false,
      disableAutofill = false,
      ...restProps
    } = this.props;

    const disableAutofillProps = disableAutofill
      ? {
          autoCompleteType: 'off', // Android
          textContentType: 'none', // iOS
        }
      : {};

    return (
      <View
        style={[
          styles.container,
          ...(invalid ? [styles.invalidContainer] : []),
          style,
        ]}
      >
        {iconImage && (
          <ScalableImage
            style={styles.iconImage}
            source={iconImage}
            resizeMode="contain"
            fadeDuration={0}
          />
        )}
        <TextInput
          style={styles.input}
          {...disableAutofillProps}
          {...restProps}
        />
      </View>
    );
  }
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
  invalidContainer: {
    borderColor: 'red',
    borderWidth: 1,
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
