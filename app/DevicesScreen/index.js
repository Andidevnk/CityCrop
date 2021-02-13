import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from 'shared/store/auth/actions';

function DevicesScreen() {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <View>
      <Text>Logged In!</Text>
      <Button onPress={logoutUser} title="Logout" />
    </View>
  );
}

const styles = StyleSheet.create({});

export default DevicesScreen;
