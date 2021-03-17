import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Measurements from './Measurements';

const ModuleScreen = () => {
  return (
    <View style={styles.container}>
      <Measurements />
      <Text
        style={{
          fontSize: 21,
          fontWeight: 'bold',
          color: '#18191F',
        }}
      >
        Your plants
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 28,
    paddingHorizontal: 20,
    backgroundColor: '#F5F8F5',
  },
});

export default ModuleScreen;
