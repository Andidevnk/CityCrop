import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import cardStyles from 'shared/styles/card';
import ScalableImage from 'shared/components/ScalableImage';
import ActionButton from './ActionButton';

const getDeviceImageStyle = (modulesCount) => [
  styles.deviceImage,
  modulesCount === 1 ? styles.singleModuleImage : styles.dualModuleImage,
];
const getDeviceImageSource = (modulesCount) =>
  modulesCount === 1
    ? require('assets/imgs/1-module-device-front.png')
    : require('assets/imgs/2-module-device-front.png');

const DeviceCard = ({ device }) => (
  <View
    style={{
      ...cardStyles.card,
      ...styles.cardPadding,
    }}
  >
    <Image
      style={styles.settingsIcon}
      source={require('assets/icons/settings.png')}
      resizeMode="contain"
    />
    <Image
      style={getDeviceImageStyle(device.modulesCount)}
      source={getDeviceImageSource(device.modulesCount)}
      resizeMode="contain"
    />
    <View style={styles.nameContainer}>
      <Text style={styles.name}>{device.name}</Text>
      <ScalableImage
        style={styles.connectionStatusIcon}
        source={require('assets/icons/connected.png')}
        resizeMode="contain"
      />
    </View>
    <View style={styles.plantsContainer}>
      <Image
        style={styles.plantImage}
        source={require('assets/icons/plant.png')}
        resizeMode="contain"
      />
      <Text style={styles.plantsText}>{device.plantsCount} plants</Text>
    </View>
    <View style={styles.actionsContainer}>
      <ActionButton
        style={styles.actionBtnMargin}
        iconSource={require('assets/icons/watering-can.png')}
        title="Empty tank"
      />
      <ActionButton
        iconSource={require('assets/icons/bottle.png')}
        title="Replace Nutrient"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardPadding: {
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  deviceImage: {
    marginBottom: 25,
  },
  singleModuleImage: {
    height: 140,
  },
  dualModuleImage: {
    height: 180,
  },
  settingsIcon: {
    position: 'absolute',
    top: 20,
    right: 25,
    height: 22,
    width: 22,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#18191F',
  },
  connectionStatusIcon: {
    height: 19,
  },
  plantsContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
  },
  plantImage: {
    width: 29,
    height: 26,
    marginRight: 15,
  },
  plantsText: {
    color: '#18191F',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionBtnMargin: {
    marginRight: 15,
  },
});

export default DeviceCard;
