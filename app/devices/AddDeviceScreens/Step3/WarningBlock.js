import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const WarningBlock = () => (
  <View style={styles.container}>
    <Image
      style={styles.icon}
      source={require('assets/icons/warning.png')}
      resizeMode="contain"
    />
    <Text style={styles.text}>
      If the light is blinking white instead of blue, press the button on the
      device for 15 seconds and follow the above instructions again to
      reconnect.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgba(255, 60, 74, 0.15)',
    borderRadius: 15,
    marginBottom: 30,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  text: {
    fontSize: 16,
    color: '#000000',
    flex: 1,
  },
});

export default WarningBlock;
