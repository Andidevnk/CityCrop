import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import { Provider } from 'react-redux';

import store from './shared/store';
import AuthNavigator from './app/AuthNavigator';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <AuthNavigator />
    </Provider>
  );
}
