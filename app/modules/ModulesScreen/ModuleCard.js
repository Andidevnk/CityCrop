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

const POWER_STATUS_TO_ICON = {
  on: require('assets/icons/on.png'),
  off: require('assets/icons/off.png'),
};

const getModuleImageSource = (moduleType, onlineStatus, hasPlants) => {
  const modulePart = moduleType === 'main' ? 'LU' : 'UU';
  if (onlineStatus === 'offline')
    return DEVICE_MODULE_IMAGES[`${modulePart}-offline`];
  const plantsPart = hasPlants ? 'with-plants' : 'no-plants';
  return DEVICE_MODULE_IMAGES[`${modulePart}-online-${plantsPart}`];
};

const ModuleCard = ({ style, module, onCardPress, onSettingsIconPress }) => {
  const { name, plants, type, powerStatus, onlineStatus } = module;
  const hasPlants = plants.length > 0;

  return (
    <Pressable
      style={[CardStyles.card, styles.cardPadding, style]}
      onPress={() => onCardPress(module)}
    >
      <TouchableOpacity
        style={styles.settingsIconContainer}
        onPress={() => onSettingsIconPress(module)}
      >
        <Image
          style={styles.settingsIcon}
          source={require('assets/icons/settings.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <ScalableImage
        style={styles.moduleImage}
        source={getModuleImageSource(type, onlineStatus, hasPlants)}
        resizeMode="contain"
      />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <ScalableImage
          style={styles.connectionStatusIcon}
          source={POWER_STATUS_TO_ICON[powerStatus]}
          resizeMode="contain"
        />
      </View>
      <View style={styles.plantsContainer}>
        <ScalableImage
          style={styles.plantImage}
          source={require('assets/icons/leaves.png')}
          resizeMode="contain"
        />
        <Text style={styles.plantsText}>{plants.length} plants</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardPadding: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 25,
  },
  moduleImage: {
    height: 140,
    marginBottom: 20,
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
    width: 33,
    height: 33,
  },
  plantsContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  plantImage: {
    width: 28,
    marginRight: 15,
  },
  plantsText: {
    color: '#18191F',
  },
});

export default ModuleCard;
