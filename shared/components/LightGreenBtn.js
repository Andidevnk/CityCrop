import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  ActivityIndicator,
} from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';

function LightGreenBtn({
  style,
  title,
  icon,
  outlined = false,
  loading = false,
  disabled = false,
  ...restProps
}) {
  if (loading)
    return <ActivityIndicator style={style} size="large" color="green" />;
  return (
    <TouchableHighlight
      style={[
        styles.button,
        ...(outlined ? [styles.buttonOutlined] : []),
        ...(disabled ? [styles.buttonDisabled] : []),
        style,
      ]}
      underlayColor={outlined ? '#DDDDDD' : '#4bad01'}
      activeOpacity={0.9}
      disabled={disabled}
      {...restProps}
    >
      <>
        {icon && (
          <ScalableImage
            style={{ height: 25, marginRight: 10 }}
            source={icon}
            resizeMode="contain"
          />
        )}
        <Text style={[styles.text, ...(outlined ? [styles.textOutlined] : [])]}>
          {title}
        </Text>
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#59C901',
    borderRadius: 27,
    alignSelf: 'center',
  },
  buttonOutlined: {
    padding: 16 - 1.5,
    borderWidth: 1.5,
    borderColor: '#59C901',
    backgroundColor: 'transparent',
  },
  buttonDisabled: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF',
  },
  textOutlined: {
    color: '#000000',
  },
});

export default LightGreenBtn;
