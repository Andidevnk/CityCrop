import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import { Provider } from 'react-redux';
import * as Sentry from 'sentry-expo';

import store from 'shared/store';
import AlertSnackBar from 'shared/components/AlertSnackBar';
import AuthNavigator from './app/AuthNavigator';

// Initialize Sentry
Sentry.init({
  dsn: 'https://70bb7c356f5e45a6bfd6a03fe76d5ecc@o786187.ingest.sentry.io/5799477',
  debug: false,
  enableInExpoDevelopment: false,
});

// Initialize Notifications handler
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
      <AlertSnackBar />
    </Provider>
  );
}
