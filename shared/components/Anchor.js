import React from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Linking from 'expo-linking';

const Anchor = ({ href, children, ...restProps }) => {
  const handlePress = () => {
    Linking.openURL(href);
    if (restProps.onPress) restProps.onPress();
  };

  return (
    <Text style={styles.anchor} {...restProps} onPress={handlePress}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  anchor: {
    color: '#59C901',
  },
});

export default Anchor;
