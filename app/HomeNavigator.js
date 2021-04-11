import React, { useEffect, useState } from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import { ScreenOptions } from 'shared/constants';
import { loadDevicesAsync } from 'shared/store/devices/actions';
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
import PlantScreen from './plants/PlantScreen';
import PlantCategoriesScreen from './plants/PlantCategoriesScreen';
import CategoryPlantsScreen from './plants/CategoryPlantsScreen';
import AddPlantScreen from './plants/AddPlantScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  const [isLoadingDevices, setIsLoadingDevices] = useState(false);
  const devicesCount = useSelector((state) => state.devices.devices.length);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoadingDevices(true);
    dispatch(loadDevicesAsync()).finally(() => setIsLoadingDevices(false));
  }, [dispatch]);

  if (isLoadingDevices) return null;

  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      {devicesCount === 0 ? (
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
              title: route.params.deviceName,
            })}
          />
          <Stack.Screen
            name="Module"
            component={ModuleScreen}
            options={({ route }) => ({
              ...ScreenOptions.transparentHeader,
              title: route.params.moduleName,
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
            name="Plant"
            component={PlantScreen}
            options={({ route }) => ({
              ...ScreenOptions.transparentHeader,
              title: route.params.plant.name,
            })}
          />
          <Stack.Screen
            name="Plant Categories"
            component={PlantCategoriesScreen}
            options={{
              ...ScreenOptions.greenHeader,
              title: 'Add Plant',
            }}
          />
          <Stack.Screen
            name="Category Plants"
            component={CategoryPlantsScreen}
            options={ScreenOptions.greenHeader}
          />
          <Stack.Screen
            name="Add Plant"
            component={AddPlantScreen}
            options={({ route }) => ({
              ...ScreenOptions.greenHeader,
              title: route.params.plantName,
            })}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
