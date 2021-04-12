import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';

import { getMeAsync } from 'shared/store/users/actions';
import { loadDevicesAsync } from 'shared/store/devices/actions';
import DrawerContent from './drawer/Drawer';
import HomeNavigator from './HomeNavigator';
import AccountSettingsNavigator from './AccountSettingsNavigator';
import NotificationsScreen from './drawer/NotificationsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  // Fetch devices and me before rendering screens
  useEffect(() => {
    Promise.all([
      dispatch(loadDevicesAsync()),
      dispatch(getMeAsync()),
    ]).then(() => setIsLoading(false));
  }, [dispatch]);

  if (isLoading) return null;

  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen
        name="Account Settings"
        component={AccountSettingsNavigator}
      />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
