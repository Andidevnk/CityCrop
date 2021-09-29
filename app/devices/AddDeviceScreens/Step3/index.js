import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import LightGreenBtn from 'shared/components/LightGreenBtn';
import WarningBlock from './WarningBlock';

const Step3 = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Step 3</Text>
    <Text style={styles.subtitle}>Prepare your device for WiFi connection</Text>
    <Text>
      Press the button on your device for{' '}
      <Text style={{ fontWeight: 'bold' }}>5 seconds</Text> to enable the WiFi
      Connection mode. When the light starts blinking blue, the mode is
      successfully enabled and you can press{' '}
      <Text style={{ fontWeight: 'bold' }}>Next</Text>.
    </Text>
    <Image
      style={{ flex: 1, alignSelf: 'center', marginVertical: 50 }}
      source={require('assets/imgs/devices-modules/blinking-blue.gif')}
      resizeMode="contain"
    />
    <WarningBlock />
    <LightGreenBtn
      style={{ marginTop: 'auto' }}
      title="Next"
      onPress={() => navigation.navigate('Add New Device - Step 4')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
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
});

export default Step3;
