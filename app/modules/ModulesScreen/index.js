import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ModuleCard from './ModuleCard';
import AddNewModuleBtn from './AddNewModuleBtn';

const selectDevice = (deviceId) => (state) =>
  state.devices.devices.find((device) => device.id === deviceId);
const selectModules = (deviceId) => (state) =>
  selectDevice(deviceId)(state).modules;

const ModulesScreen = ({
  navigation,
  route: {
    params: { deviceId },
  },
}) => {
  const modules = useSelector(selectModules(deviceId));

  console.log(JSON.stringify(modules));

  const navigateToModule = (module) =>
    navigation.navigate('Module', {
      module,
    });
  const navigateToModuleSettings = (module) =>
    navigation.navigate('Module Settings', {
      module,
    });
  const navigateToAddModule = (module) =>
    navigation.navigate('Add New Module', { module });

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={modules}
        renderItem={({ item }) => (
          <ModuleCard
            module={item}
            onCardPress={navigateToModule}
            onSettingsIconPress={navigateToModuleSettings}
          />
        )}
        ListFooterComponent={() => (
          <AddNewModuleBtn onPress={navigateToAddModule} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8F5',
  },
  listContainer: {
    paddingTop: 25,
    paddingHorizontal: 25,
    paddingBottom: 25,
  },
});

export default ModulesScreen;
