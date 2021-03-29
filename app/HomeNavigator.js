import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { ScreenOptions } from 'shared/constants';
import WelcomeScreen from './devices/WelcomeScreen';
import DevicesScreen from './devices/DevicesScreen';
import DeviceSettingsScreen from './devices/DeviceSettingsScreen';
import WiFiSettingsScreen from './drawer/WiFiSettingsScreen';
import WaterWizardStep1Screen from './devices/WaterWizardScreen/WaterWizardStep1Screen';
import ReplaceNutrientsScreen from './devices/ReplaceNutrientsScreen';
import ModulesScreen from './modules/ModulesScreen';
import ModuleScreen from './modules/ModuleScreen';
import ModuleSettingsScreen from './modules/ModuleSettingsScreen';
import AddModuleScreen from './modules/AddModuleScreen';
import PlantCategoriesScreen from './plants/PlantCategoriesScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  const devices = ['asdasd'];

  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      {devices.length === 0 ? (
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Devices"
            component={DevicesScreen}
            options={{
              ...ScreenOptions.transparentHeader,
              headerTitle: 'Welcome back Amy!',
            }}
          />
          <Stack.Screen
            name="Device Settings"
            component={DeviceSettingsScreen}
            options={ScreenOptions.greenHeader}
          />
          <Stack.Screen
            name="WiFi Settings"
            component={WiFiSettingsScreen}
            options={ScreenOptions.greenHeader}
          />
          <Stack.Screen
            name="Water Wizard"
            component={WaterWizardStep1Screen}
            options={ScreenOptions.greenHeader}
          />
          <Stack.Screen
            name="Replace Nutrients"
            component={ReplaceNutrientsScreen}
            options={ScreenOptions.greenHeader}
          />
          <Stack.Screen
            name="Modules"
            component={ModulesScreen}
            options={({ route }) => ({
              ...ScreenOptions.transparentHeader,
              title: route.params.device.name,
            })}
          />
          <Stack.Screen
            name="Module"
            component={ModuleScreen}
            options={({ route }) => ({
              ...ScreenOptions.transparentHeader,
              title: route.params.module.name,
            })}
          />
          <Stack.Screen
            name="Module Settings"
            component={ModuleSettingsScreen}
            options={ScreenOptions.greenHeader}
          />
          <Stack.Screen
            name="Add New Module"
            component={AddModuleScreen}
            options={ScreenOptions.greenHeader}
          />
          <Stack.Screen
            name="Plant Categories"
            component={PlantCategoriesScreen}
            options={{
              ...ScreenOptions.greenHeader,
              title: 'Add Plant',
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
