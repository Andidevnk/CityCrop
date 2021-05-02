import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LightGreenBtn from 'shared/components/LightGreenBtn';

const Step4 = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Step 4</Text>
    <Text style={styles.subtitle}>Connect to your device</Text>

    <View style={styles.listContainer}>
      <View style={styles.listItem}>
        <Text style={styles.listNumber}>1.</Text>
        <Text style={styles.listItemText}>Turn on WiFi on your phone</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listNumber}>2.</Text>
        <Text style={styles.listItemText}>
          Connect to <Text style={{ fontWeight: 'bold' }}>CityCrop</Text>{' '}
          network
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listNumber}>3.</Text>
        <Text style={styles.listItemText}>
          When you are done, return to the App and press{' '}
          <Text style={{ fontWeight: 'bold' }}>Next</Text>
        </Text>
      </View>
    </View>

    <LightGreenBtn
      style={{ marginTop: 'auto' }}
      title="Next"
      onPress={() => navigation.navigate('Add New Device - Step 5')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 5,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#59C901',
  },
  subtitle: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#18191F',
  },
  listContainer: {
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  listNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#59C901',
    marginRight: 5,
  },
  listItemText: {
    fontSize: 16,
    color: '#18191F',
    flex: 1,
  },
});

export default Step4;
