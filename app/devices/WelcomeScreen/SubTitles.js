import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Anchor from 'shared/components/Anchor';

const SubTitles = () => (
  <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>
      Choose an option to get started with CityCrop:
    </Text>
    <Text style={{ ...styles.subtitle, marginBottom: 0 }}>
      If you have any questions feel free to contact us at{' '}
      <Anchor href="mailto:support@citycrop.io">support@citycrop.io</Anchor>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  subtitleContainer: {
    marginBottom: 35,
  },
  subtitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    color: '#18191F',
  },
});

export default SubTitles;
