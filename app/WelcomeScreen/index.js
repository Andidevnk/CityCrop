import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import SubTitles from './SubTitles';
import LearnMoreCard from './LearnMoreCard';
import SetupDeviceCard from './SetupDeviceCard';

const WelcomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome!</Text>
    <SubTitles />
    <LearnMoreCard />
    <SetupDeviceCard />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F8F5',
  },
  title: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0B7B03',
  },
});

export default WelcomeScreen;
