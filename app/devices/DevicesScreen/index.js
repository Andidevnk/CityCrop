import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';
import DeviceCard from './DeviceCard';

const devices = [
  {
    key: 'City Crop Device',
    name: 'City Crop Device',
    modulesCount: 2,
    plantsCount: 5,
    status: 'connected',
  },
  {
    key: 'Dan',
    name: 'Dan',
    modulesCount: 1,
    plantsCount: 5,
    status: 'connected',
  },
];

function DevicesScreen({ navigation }) {
  const navigateToModules = (device) => {
    navigation.navigate('Modules', {
      deviceName: device.name,
      deviceId: device.id,
    });
  };

  const navigateToEmptyTank = () => {
    navigation.navigate('Water Wizard');
  };

  const navigateToReplaceNutrients = () => {
    navigation.navigate('Replace Nutrients');
  };

  const navigateToSettings = () => {
    navigation.navigate('Device Settings');
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          paddingTop: 4,
          paddingHorizontal: 4,
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        data={devices}
        renderItem={({ item }) => (
          <DeviceCard
            device={item}
            onCardPress={navigateToModules}
            onEmptyTankPress={navigateToEmptyTank}
            onReplaceNutrientPress={navigateToReplaceNutrients}
            onSettingsIconPress={navigateToSettings}
          />
        )}
        ListFooterComponent={() => (
          <TouchableOpacity style={styles.addDeviceBtn}>
            <Text style={styles.addDeviceText}>Add a new device</Text>
            <ScalableImage
              style={styles.addDeviceIcon}
              source={require('assets/icons/plus.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F5F8F5',
  },
  addDeviceBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#0B7B03',
  },
  addDeviceText: {
    fontSize: 16,
    color: '#0B7B03',
  },
  addDeviceIcon: {
    height: 24,
  },
});

export default DevicesScreen;
