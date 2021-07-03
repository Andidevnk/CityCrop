import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Animated from 'react-native-reanimated';

import ScalableImage from 'shared/components/ScalableImage';

// Class component necessary for createAnimatedComponent()
class IconTextInput extends Component {
  render() {
    const {
      style,
      inputContainerStyle,
      iconImage,
      errorText,
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
      <View style={style}>
        <Animated.View
          style={[
            styles.container,
            ...(invalid ? [styles.invalidContainer] : []),
            inputContainerStyle,
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
        </Animated.View>
        {invalid && errorText && (
          <Text style={styles.errorText}>{errorText}</Text>
        )}
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
  errorText: {
    marginTop: 5,
    marginLeft: 10,
    color: 'red',
  },
});

export default IconTextInput;
