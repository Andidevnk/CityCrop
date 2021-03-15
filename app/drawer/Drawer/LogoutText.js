import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const LogoutText = ({ onPress }) => (
  <Pressable style={styles.textContainer} onPress={onPress}>
    <Text style={styles.logoutText}>Logout</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 'auto',
    marginBottom: 40,
  },

  logoutText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF3C4A',
  },
});

export default LogoutText;
