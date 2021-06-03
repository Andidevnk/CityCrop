import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { selectDevices } from 'shared/store/devices/selectors';
import WelcomeNavigator from './WelcomeNavigator';
import DevicesNavigator from './DevicesNavigator';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  const devicesCount = useSelector(selectDevices()).length;

  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      {devicesCount <= 0 ? (
        <Stack.Screen
          name="Welcome"
          component={WelcomeNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Devices"
          component={DevicesNavigator}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
