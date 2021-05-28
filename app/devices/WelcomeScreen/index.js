import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import SubTitles from './SubTitles';
import LearnMoreCard from './LearnMoreCard';
import SetupDeviceCard from './SetupDeviceCard';

const WelcomeScreen = ({ navigation }) => {
  const navigateToAddDevice = () => navigation.navigate('Add New Device');

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
    >
      <SubTitles />
      <LearnMoreCard />
      <SetupDeviceCard onPress={navigateToAddDevice} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  scrollView: {
    backgroundColor: '#F5F8F5',
  },
});

export default WelcomeScreen;
