import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { selectModules } from 'shared/store/modules/selectors';
import ModuleCard from './ModuleCard';
import AddModuleCard from './AddModuleCard';
import { ScrollView } from 'react-native-gesture-handler';

const calcVisibleModuleCards = (modulesCount) => {
  if (modulesCount === 0) return ['LU-add'];
  if (modulesCount === 1) return ['LU-module', 'UU-add'];
  if (modulesCount === 2) return ['LU-module', 'UU-module'];
};

const ModulesScreen = ({
  navigation,
  route: {
    params: { deviceId },
  },
}) => {
  const modules = useSelector(selectModules(deviceId));
  const visibleModuleCards = calcVisibleModuleCards(modules.length);

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
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {visibleModuleCards.includes('UU-module') && (
        <ModuleCard
          module={modules[1]}
          onCardPress={navigateToModule}
          onSettingsIconPress={navigateToModuleSettings}
        />
      )}
      {visibleModuleCards.includes('UU-add') && (
        <AddModuleCard
          text="Add a second module"
          type="UU"
          onPress={navigateToAddModule}
        />
      )}
      {visibleModuleCards.includes('LU-module') && (
        <ModuleCard
          module={modules[0]}
          onCardPress={navigateToModule}
          onSettingsIconPress={navigateToModuleSettings}
        />
      )}
      {visibleModuleCards.includes('LU-add') && (
        <AddModuleCard
          style={{ marginTop: 300 }}
          text="Add the first module"
          type="LU"
          onPress={navigateToAddModule}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 25,
  },
  content: {
    backgroundColor: '#F5F8F5',
  },
});

export default ModulesScreen;
