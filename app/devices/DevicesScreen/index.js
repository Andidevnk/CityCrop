import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import DeviceCard from './DeviceCard';
import AddNewDeviceBtn from './AddNewDeviceBtn';

function DevicesScreen({ navigation }) {
  const devices = useSelector((state) => state.devices.devices);

  const navigateToModules = (device) =>
    navigation.navigate('Modules', {
      deviceId: device.id,
      deviceName: device.name,
    });
  const navigateToEmptyTank = () => navigation.navigate('Water Wizard');
  const navigateToReplaceNutrients = () =>
    navigation.navigate('Replace Nutrients');
  const navigateToSettings = () => navigation.navigate('Device Settings');

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
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
        ListFooterComponent={AddNewDeviceBtn}
        showsVerticalScrollIndicator={false}
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
  listContainer: {
    paddingTop: 4,
    paddingHorizontal: 4,
    paddingBottom: 20,
  },
});

export default DevicesScreen;
