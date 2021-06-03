import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { ScreenOptions } from 'shared/constants';
import HeaderBtn from 'shared/components/HeaderBtn';
import WelcomeScreen from './devices/WelcomeScreen';
import AddDeviceStep1Screen from './devices/AddDeviceScreens/Step1';
import AddDeviceStep2Screen from './devices/AddDeviceScreens/Step2';
import AddDeviceStep3Screen from './devices/AddDeviceScreens/Step3';
import AddDeviceStep4Screen from './devices/AddDeviceScreens/Step4';
import AddDeviceStep5Screen from './devices/AddDeviceScreens/Step5';

const Stack = createStackNavigator();

const WelcomeNavigator = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{
        ...ScreenOptions.transparentHeader,
        headerTitle: `Welcome!`,
        headerTitleStyle: {
          fontSize: 26,
          fontWeight: 'bold',
          color: '#0B7B03',
        },
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
  </Stack.Navigator>
);

export default WelcomeNavigator;
