import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from './Drawer';
import HomeNavigator from './HomeNavigator';
import AccountSettingsNavigator from './AccountSettingsNavigator';
import NotificationsScreen from './NotificationsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerContent}>
    <Drawer.Screen name="Home" component={HomeNavigator} />
    <Drawer.Screen
      name="Account Settings"
      component={AccountSettingsNavigator}
    />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
