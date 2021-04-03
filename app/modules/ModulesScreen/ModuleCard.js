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

const STATUS_TO_IMAGE = {
  on: require('assets/imgs/modules/module-on.png'),
  off: require('assets/imgs/modules/module-off.png'),
};
const STATUS_TO_ICON = {
  on: require('assets/icons/on.png'),
  off: require('assets/icons/off.png'),
};

const ModuleCard = ({ module, onCardPress, onSettingsIconPress }) => {
  const { name, plants, status } = module;
  return (
    <Pressable
      style={[CardStyles.card, styles.cardPadding]}
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
        source={STATUS_TO_IMAGE[status]}
        resizeMode="contain"
      />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <ScalableImage
          style={styles.connectionStatusIcon}
          source={STATUS_TO_ICON[status]}
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
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  moduleImage: {
    height: 140,
    marginBottom: 40,
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
