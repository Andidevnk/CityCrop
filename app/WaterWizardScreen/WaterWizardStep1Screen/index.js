import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LightGreenBtn from 'shared/components/LightGreenBtn';
import ScalableImage from 'shared/components/ScalableImage';

const WaterWizardScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Step 1</Text>
    <Text style={styles.subtitle}>How to open the water valve</Text>
    <ScalableImage
      style={styles.image}
      source={require('assets/imgs/water-tank/step-1.gif')}
    />
    <View style={styles.listContainer}>
      <Text style={styles.listItem}>
        <Text style={styles.listNumber}>1.</Text> Connect the blue hose where
        ends up in a bucket bigger than 8LT.
      </Text>
      <Text style={styles.listItem}>
        <Text style={styles.listNumber}>2.</Text> Remove the nutrient CC01.
      </Text>
      <Text style={styles.listItem}>
        <Text style={styles.listNumber}>3.</Text> Open the water valve.
      </Text>
    </View>
    <View style={styles.buttonsContainer}>
      <LightGreenBtn
        style={{ marginBottom: 20 }}
        title="Start empty tank"
        onPress={() => console.log('Start')}
      />
      <LightGreenBtn
        title="Next"
        outlined
        onPress={() => console.log('Cancel')}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
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
  image: {
    alignSelf: 'center',
    marginBottom: 27,
    height: 300,
    borderRadius: 15,
  },
  listContainer: {
    paddingHorizontal: 2,
  },
  listItem: {
    marginBottom: 20,
    fontSize: 16,
    color: '#18191F',
  },
  listNumber: {
    fontWeight: 'bold',
    color: '#59C901',
  },
  buttonsContainer: {
    paddingHorizontal: 5,
  },
});

export default WaterWizardScreen;
