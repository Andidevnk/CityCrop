import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { selectModules } from 'shared/store/modules/selectors';
import ModuleCard from './ModuleCard';
import AddNewModuleBtn from './AddNewModuleBtn';

const ModulesScreen = ({
  navigation,
  route: {
    params: { deviceId },
  },
}) => {
  const modules = useSelector(selectModules(deviceId));

  const navigateToModule = (module) =>
    navigation.navigate('Module', {
      deviceId,
      moduleId: module.id,
      moduleName: module.name,
    });
  const navigateToModuleSettings = (module) =>
    navigation.navigate('Module Settings', { module });
  const navigateToAddModule = () =>
    navigation.navigate('Add New Module', { deviceId });

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={[...modules].reverse()} // Reverse modules array
        renderItem={({ item }) => (
          <ModuleCard
            module={item}
            onCardPress={navigateToModule}
            onSettingsIconPress={navigateToModuleSettings}
          />
        )}
        ListFooterComponent={() =>
          modules.length < 2 && (
            <AddNewModuleBtn onPress={navigateToAddModule} />
          )
        }
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
