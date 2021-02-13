import React from 'react';
import { View, Text } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import WelcomeScreen from './WelcomeScreen';
import DevicesScreen from './DevicesScreen';

// Stack global options
const stackScreenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};

const Stack = createStackNavigator();

const HomeNavigator = () => {
  const devices = [];

  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      {devices.length === 0 ? (
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      ) : (
        <Stack.Screen name="Devices" component={DevicesScreen} />
      )}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
