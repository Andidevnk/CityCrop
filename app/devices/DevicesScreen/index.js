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
  const navigateToEmptyTank = (device) =>
    navigation.navigate('Water Wizard', { deviceId: device.id });
  const navigateToSettings = (device) =>
    navigation.navigate('Device Settings', { deviceId: device.id });
  const navigateToAddDevice = () => navigation.navigate('Add New Device');

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
            onSettingsIconPress={navigateToSettings}
          />
        )}
        ListFooterComponent={() => (
          <AddNewDeviceBtn onPress={navigateToAddDevice} />
        )}
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
