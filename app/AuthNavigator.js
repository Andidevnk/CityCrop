import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { tryGetStoredUserToken } from 'shared/store/auth/actions';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import HomeNavigator from './HomeNavigator';

// Stack global options
const stackScreenOptions = {
  headerTransparent: true,
  headerTitle: '',
  headerTintColor: '#0B7B03',
  ...TransitionPresets.SlideFromRightIOS,
};

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const { isAuthLoading, userToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tryGetStoredUserToken());
  }, [dispatch]);

  // Waiting until token is fetched
  if (isAuthLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={stackScreenOptions}>
        {userToken === null ? (
          // Logged Out
          <Fragment>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen
              name="Forgot Password"
              component={ForgotPasswordScreen}
            />
          </Fragment>
        ) : (
          // Logged In
          <Stack.Screen
            name="Home"
            component={HomeNavigator}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
