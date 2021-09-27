import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { ScreenOptions } from 'shared/constants';
import { selectMe } from 'shared/store/users/selectors';
import HeaderBtn from 'shared/components/HeaderBtn';
import DevicesScreen from './devices/DevicesScreen';
import DeviceSettingsScreen from './devices/DeviceSettingsScreen';
import AddDeviceStep1Screen from './devices/AddDeviceScreens/Step1';
import AddDeviceStep2Screen from './devices/AddDeviceScreens/Step2';
import AddDeviceStep3Screen from './devices/AddDeviceScreens/Step3';
import AddDeviceStep4Screen from './devices/AddDeviceScreens/Step4';
import AddDeviceStep5Screen from './devices/AddDeviceScreens/Step5';
import WiFiSettingsScreen from './devices/WiFiSettingsScreen';
import WaterWizardStep1Screen from './devices/WaterWizardScreens/Step1';
import WaterWizardStep2Screen from './devices/WaterWizardScreens/Step2';
import WaterWizardStep3Screen from './devices/WaterWizardScreens/Step3';
import ReplaceNutrientsScreen from './devices/ReplaceNutrientsScreen';
import ModulesScreen from './modules/ModulesScreen';
import ModuleScreen from './modules/ModuleScreen';
import ModuleSettingsScreen from './modules/ModuleSettingsScreen';
import AddModuleScreen from './modules/AddModuleScreen';
import PlantScreen from './plants/PlantScreen';
import GiveFeedbackScreen from './plants/GiveFeedbackScreen';
import PlantCategoriesScreen from './plants/PlantCategoriesScreen';
import CategoryPlantsScreen from './plants/CategoryPlantsScreen';
import PlantInfoScreen from './plants/PlantInfoScreen';
import AddDomeScreen from './plants/AddDomeScreen';

const Stack = createStackNavigator();

const DevicesNavigator = ({ navigation }) => {
  const { name } = useSelector(selectMe());

  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name="Devices"
        component={DevicesScreen}
        options={{
          ...ScreenOptions.transparentHeader,
          headerTitle: `Welcome back ${name}!`,
          // eslint-disable-next-line react/display-name
          headerLeft: () => (
            <HeaderBtn
              source={require('assets/icons/toggle-lines.png')}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Add New Device"
        component={AddDeviceStep1Screen}
        options={ScreenOptions.greenHeader}
      />
      <Stack.Screen
        name="Add New Device - Step 2"
        component={AddDeviceStep2Screen}
        options={{ ...ScreenOptions.greenHeader, title: 'Add New Device' }}
      />
      <Stack.Screen
        name="Add New Device - Step 3"
        component={AddDeviceStep3Screen}
        options={{ ...ScreenOptions.greenHeader, title: 'Add New Device' }}
      />
      <Stack.Screen
        name="Add New Device - Step 4"
        component={AddDeviceStep4Screen}
        options={{ ...ScreenOptions.greenHeader, title: 'Add New Device' }}
      />
      <Stack.Screen
        name="Add New Device - Step 5"
        component={AddDeviceStep5Screen}
        options={{ ...ScreenOptions.greenHeader, title: 'Add New Device' }}
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
        name="Water Wizard - Step 2"
        component={WaterWizardStep2Screen}
        options={{
          ...ScreenOptions.greenHeader,
          title: 'Water Wizard',
        }}
      />
      <Stack.Screen
        name="Water Wizard - Step 3"
        component={WaterWizardStep3Screen}
        options={{
          ...ScreenOptions.greenHeader,
          title: 'Water Wizard',
        }}
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
        name="Give Feedback"
        component={GiveFeedbackScreen}
        options={({ route }) => ({
          ...ScreenOptions.transparentHeader,
          title: route.params.plantName,
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
        component={PlantInfoScreen}
        options={({ route }) => ({
          ...ScreenOptions.greenHeader,
          title: route.params.plantName,
        })}
      />
      <Stack.Screen
        name="Add Dome"
        component={AddDomeScreen}
        options={({ route }) => ({
          ...ScreenOptions.greenHeader,
          title: route.params.plantName,
        })}
      />
    </Stack.Navigator>
  );
};

export default DevicesNavigator;
