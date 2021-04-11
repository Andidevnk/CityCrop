import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import { CardStyles } from 'shared/styles';
import ScalableImage from 'shared/components/ScalableImage';
import ActionButton from './ActionButton';

const getDeviceImageStyle = (modulesCount) => [
  styles.deviceImage,
  modulesCount === 1 ? styles.singleModuleImage : styles.dualModuleImage,
];
const getDeviceImageSource = (modulesCount) =>
  modulesCount === 1
    ? require('assets/imgs/devices/1-module-device-front.png')
    : require('assets/imgs/devices/2-module-device-front.png');

const DeviceCard = ({
  device,
  onCardPress,
  onEmptyTankPress,
  onReplaceNutrientPress,
  onSettingsIconPress,
}) => {
  const { name, modulesCount, plantsCount } = device;
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
        style={getDeviceImageStyle(modulesCount)}
        source={getDeviceImageSource(modulesCount)}
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
      <View style={styles.actionsContainer}>
        <ActionButton
          style={styles.actionBtnMargin}
          iconSource={require('assets/icons/watering-can.png')}
          title="Empty tank"
          onPress={onEmptyTankPress}
        />
        <ActionButton
          iconSource={require('assets/icons/bottle.png')}
          title="Replace Nutrient"
          onPress={onReplaceNutrientPress}
        />
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
    top: 20,
    right: 20,
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
