import React from 'react';
import { View, Text } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import WelcomeScreen from './WelcomeScreen';
import DevicesScreen from './DevicesScreen';
import SettingsScreen from './SettingsScreen';

// Stack global options
const stackScreenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};

const Stack = createStackNavigator();

const HomeNavigator = () => {
  const devices = ['asdasd'];

  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      {devices.length === 0 ? (
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      ) : (
        <>
          <Stack.Screen
            name="Devices"
            component={DevicesScreen}
            options={{
              headerShown: true,
              headerTitle: 'Welcome back Amy!',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#F5F8F5',
                elevation: 0,
                shadowOpacity: 0,
              },
              // headerLeft: () => (
              //   <TouchableHighlight
              //     activeOpacity={0.9}
              //     underlayColor="#EEEEEE"
              //     onPress={() => console.log('left')}
              //   >
              //     <Image
              //       style={{ height: 50, width: 50 }}
              //       source={require('assets/icons/key.png')}
              //       fadeDuration={0}
              //       resizeMode="contain"
              //     />
              //   </TouchableHighlight>
              // ),
            }}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
