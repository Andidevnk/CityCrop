import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
  HeaderBackButton,
} from '@react-navigation/stack';

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
        name="Account Settings"
        component={AccountSettingsScreen}
        options={ScreenOptions.greenHeader}
      />
    </Stack.Navigator>
  );
};

export default AccountSettingsNavigator;
