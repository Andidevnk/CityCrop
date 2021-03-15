import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';
import ModuleCard from './ModuleCard';

const modules = [
  {
    key: 'Craft’s Module',
    name: 'Craft’s Module',
    plantsCount: 4,
    status: 'on',
  },
  {
    key: 'Module D41',
    name: 'Module D41',
    plantsCount: 10,
    status: 'off',
  },
];

const ModulesScreen = ({ navigation }) => {
  const navigateToModule = (module) => {
    navigation.navigate('Module', {
      module: module,
    });
  };

  const navigateToModuleSettings = (module) => {
    navigation.navigate('Module Settings', {
      module: module,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          paddingTop: 25,
          paddingHorizontal: 25,
          paddingBottom: 25,
        }}
        showsVerticalScrollIndicator={false}
        data={modules}
        renderItem={({ item }) => (
          <ModuleCard
            module={item}
            onCardPress={navigateToModule}
            onSettingsIconPress={navigateToModuleSettings}
          />
        )}
        ListFooterComponent={() => (
          <TouchableOpacity style={styles.addDeviceBtn}>
            <Text style={styles.addDeviceText}>Add a new module</Text>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default ModulesScreen;
