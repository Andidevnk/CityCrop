import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import { registerForPushNotificationsAsync } from 'shared/utilities';
import {
  getMeAsync,
  setUserExpoPushTokenAsync,
} from 'shared/store/users/actions';
import { loadDevicesAsync } from 'shared/store/devices/actions';
import DrawerContent from './drawer/Drawer';
import HomeNavigator from './HomeNavigator';
import AccountSettingsNavigator from './AccountSettingsNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  // Fetch devices and user info before rendering screens
  useEffect(() => {
    Promise.all([
      dispatch(loadDevicesAsync()),
      dispatch(getMeAsync()),
    ]).then(() => setIsLoading(false));
  }, [dispatch]);

  useEffect(() => {
    async function checkExpoPushToken() {
      const expoPushToken = await registerForPushNotificationsAsync();
      const storedExpoPushToken = await AsyncStorage.getItem('expoPushToken');
      // If token not stored or changed
      if (
        (!storedExpoPushToken || storedExpoPushToken !== expoPushToken) &&
        expoPushToken
      ) {
        setUserExpoPushTokenAsync(expoPushToken); // Send token to backend and store it
      }
    }
    checkExpoPushToken();
  }, []);

  if (isLoading) return null;

  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen
        name="Account Settings"
        component={AccountSettingsNavigator}
      />
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
