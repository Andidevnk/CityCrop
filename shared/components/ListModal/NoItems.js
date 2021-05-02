import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NoItems = () => (
  <View style={styles.container}>
    <Text style={styles.text}>No items yet</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  text: {
    fontSize: 15,
  },
});

export default NoItems;
