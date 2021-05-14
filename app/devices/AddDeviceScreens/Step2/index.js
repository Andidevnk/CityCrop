import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import LightGreenBtn from 'shared/components/LightGreenBtn';

const Step2 = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Step 2</Text>
    <Text style={styles.subtitle}>
      When you plug your CityCrop device, the light will start blinking white. Wait until the light stops blinking and press <Text style={{ fontWeight: 'bold' }}>Next</Text>.
    </Text>
    <Image
      style={{ flex: 1, alignSelf: 'center', marginVertical: 50 }}
      source={require('assets/imgs/devices/blinking-white.gif')}
      resizeMode="contain"
    />
    <LightGreenBtn
      style={{ marginTop: 'auto' }}
      title="Next"
      onPress={() => navigation.navigate('Add New Device - Step 3')}
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
    fontSize: 18,
    color: '#18191F',
  },
});

export default Step2;
