import React from 'react';
import { View, Text } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { ScreenOptions } from 'shared/constants';
import WelcomeScreen from './WelcomeScreen';
import DevicesScreen from './DevicesScreen';
import DeviceSettingsScreen from './DeviceSettingsScreen';

// Stack global options
const stackScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const Stack = createStackNavigator();

const HomeNavigator = () => {
  const devices = ['asdasd'];

  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
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
        </>
      )}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
