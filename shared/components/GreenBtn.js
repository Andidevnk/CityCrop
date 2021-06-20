import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  ActivityIndicator,
} from 'react-native';

const GreenBtn = ({
  style,
  title,
  loading,
  outlined = false,
  ...restProps
}) => {
  if (loading)
    return <ActivityIndicator style={style} size="large" color="green" />;
  return (
    <TouchableHighlight
      style={[styles.button, outlined && styles.buttonOutlined, style]}
      activeOpacity={0.9}
      underlayColor={outlined ? '#DDDDDD' : '#4bad01'}
      {...restProps}
    >
      <Text style={[styles.text, outlined && styles.textOutlined]}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 16,
    backgroundColor: '#59C901',
    borderRadius: 27,
  },
  buttonOutlined: {
    padding: 16 - 1.5,
    borderWidth: 1.5,
    borderColor: '#0B7B03',
    backgroundColor: 'transparent',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  textOutlined: {
    color: '#000000',
  },
});

export default GreenBtn;
