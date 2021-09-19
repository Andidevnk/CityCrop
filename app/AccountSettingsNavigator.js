import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/elements';

import { ScreenOptions } from 'shared/constants';
import AccountSettingsScreen from './drawer/AccountSettingsScreen';

const Stack = createStackNavigator();

const AccountSettingsNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        // eslint-disable-next-line react/display-name
        headerLeft: (props) => (
          <HeaderBackButton
            {...props}
            onPress={() => navigation.navigate('Home')}
          />
        ),
      }}
    >
      <Stack.Screen
        name="Account Settings 1"
        component={AccountSettingsScreen}
        options={{
          ...ScreenOptions.greenHeader,
          headerTitle: 'Account Settings',
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountSettingsNavigator;
