import React from 'react';
import { SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import store from './shared/store';
import AuthNavigator from './app/AuthNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#F2F2F2',
          paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
        }}
      >
        <AuthNavigator />
      </SafeAreaView>
    </Provider>
  );
}
