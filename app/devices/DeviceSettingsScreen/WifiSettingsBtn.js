import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ScalableImage from 'shared/components/ScalableImage';

const WifiSettingsBtn = ({ style, ...restProps }) => (
  <TouchableOpacity style={[styles.wifiSettingsBtn, style]} {...restProps}>
    <ScalableImage
      style={styles.wifiSettingsBtnLeftIcon}
      source={require('assets/icons/wifi.png')}
    />
    <Text style={styles.wifiSettingsBtnText}>WiFi Setting</Text>
    <Ionicons
      style={styles.wifiSettingsBtnArrowIcon}
      name="chevron-forward"
      size={24}
      color="#59C901"
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wifiSettingsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#0B7B03',
    marginTop: 60,
  },
  wifiSettingsBtnLeftIcon: {
    height: 18,
    marginRight: 20,
  },
  wifiSettingsBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#18191F',
  },
  wifiSettingsBtnArrowIcon: {
    marginLeft: 'auto',
  },
});

export default WifiSettingsBtn;
