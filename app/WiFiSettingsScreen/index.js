import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import ScalableImage from 'shared/components/ScalableImage';

const device = {
  id: '1',
  name: 'City Crop Device',
  modulesCount: 2,
  plantsCount: 5,
  status: 'connected',
};

const WiFiSettingsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Change WiFi settings</Text>
    <TextInput
      style={[styles.input, { marginBottom: 15 }]}
      placeholder="SSID"
    />
    <TextInput style={styles.input} placeholder="Password" />
    <TouchableOpacity
      style={styles.refreshBtn}
      onPress={() => console.log('refresh')}
    >
      <Feather
        style={styles.refreshBtnIcon}
        name="refresh-cw"
        size={24}
        color="#59C901"
      />
      <Text style={styles.refreshBtnText}>Refresh</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.saveBtn}
      onPress={() => console.log('save')}
    >
      <Text style={styles.saveBtnText}>Save</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#18191F',
  },
  input: {
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      height: 1,
    },
    shadowOpacity: 0.1,
  },
  refreshBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#0B7B03',
    marginTop: 60,
  },
  refreshBtnIcon: {
    marginRight: 16,
  },
  refreshBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0B7B03',
  },
  saveBtn: {
    width: '90%',
    marginTop: 'auto',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 80,
    backgroundColor: '#59C901',
    borderRadius: 27,
  },
  saveBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default WiFiSettingsScreen;
