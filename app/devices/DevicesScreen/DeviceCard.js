import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import { DEVICE_MODULE_IMAGES } from 'shared/constants';
import { CardStyles } from 'shared/styles';
import ScalableImage from 'shared/components/ScalableImage';

const getDeviceImageModulesPart = (moduleTypes) =>
  moduleTypes.length == 1 ? moduleTypes[0] : 'LU-UU';
const getDeviceImageStyle = (moduleTypes) => [
  styles.deviceImage,
  ...(moduleTypes.length === 0 ? [styles.singleModuleImage] : []),
  ...(moduleTypes.length === 1 ? [styles.singleModuleImage] : []),
  ...(moduleTypes.length === 2 ? [styles.dualModuleImage] : []),
];
const getDeviceImageSource = (moduleTypes, hasPlants) => {
  if (moduleTypes.length === 0) return DEVICE_MODULE_IMAGES['LU-add-module'];

  const modulesPart = getDeviceImageModulesPart(moduleTypes);
  const plantsPart = hasPlants ? 'with-plants' : 'no-plants';
  return DEVICE_MODULE_IMAGES[`${modulesPart}-online-${plantsPart}`];
};

const DeviceCard = ({ device, onCardPress, onSettingsIconPress }) => {
  const { name, modules, plantsCount } = device;

  const moduleTypes = modules.map((module) =>
    module.type === 'main' ? 'LU' : 'UU'
  );
  const hasPlants = plantsCount > 0;

  return (
    <Pressable
      style={[CardStyles.card, styles.cardPadding]}
      onPress={() => onCardPress(device)}
    >
      <TouchableOpacity
        style={styles.settingsIconContainer}
        onPress={() => onSettingsIconPress(device)}
      >
        <Image
          style={styles.settingsIcon}
          source={require('assets/icons/settings.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <ScalableImage
        style={getDeviceImageStyle(moduleTypes)}
        source={getDeviceImageSource(moduleTypes, hasPlants)}
        resizeMode="contain"
      />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <ScalableImage
          style={styles.connectionStatusIcon}
          source={require('assets/icons/connected.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.plantsContainer}>
        <Image
          style={styles.plantImage}
          source={require('assets/icons/leaves.png')}
          resizeMode="contain"
        />
        <Text style={styles.plantsText}>{plantsCount} plants</Text>
      </View>
    </Pressable>
  );
};

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
  settingsIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 15,
  },
  settingsIcon: {
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
  },
  plantImage: {
    width: 29,
    height: 26,
    marginRight: 15,
  },
  plantsText: {
    color: '#18191F',
  },
});

export default DeviceCard;
