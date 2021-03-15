import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { ScreenOptions } from 'shared/constants';
import AccountSettingsScreen from './drawer/AccountSettingsScreen';

const Stack = createStackNavigator();

const AccountSettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name="Account Settings"
        component={AccountSettingsScreen}
        options={ScreenOptions.greenHeader}
      />
    </Stack.Navigator>
  );
};

export default AccountSettingsNavigator;
