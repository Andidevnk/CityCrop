import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from 'shared/store/auth/actions';
import ScalableImage from 'shared/components/ScalableImage';
import DeviceCard from './DeviceCard';

const devices = [
  {
    key: 'City Crop Device',
    name: 'City Crop Device',
    modulesCount: 2,
    plantsCount: 5,
    status: 'connected',
  },
  {
    key: 'Dan',
    name: 'Dan',
    modulesCount: 1,
    plantsCount: 5,
    status: 'connected',
  },
  {
    key: 'Dominic',
    name: 'Dominic',
    modulesCount: 2,
    plantsCount: 5,
    status: 'connected',
  },
  {
    key: 'Jackson',
    name: 'Jackson',
    modulesCount: 2,
    plantsCount: 5,
    status: 'connected',
  },
  {
    key: 'James',
    name: 'James',
    modulesCount: 2,
    plantsCount: 5,
    status: 'connected',
  },
  {
    key: 'Joel',
    name: 'Joel',
    modulesCount: 2,
    plantsCount: 5,
    status: 'connected',
  },
  {
    key: 'John',
    name: 'John',
    modulesCount: 2,
    plantsCount: 5,
    status: 'connected',
  },
  {
    key: 'Jillian',
    name: 'Jillian',
    modulesCount: 2,
    plantsCount: 5,
    status: 'connected',
  },
  {
    key: 'Jimmy',
    name: 'Jimmy',
    modulesCount: 2,
    plantsCount: 5,
    status: 'connected',
  },
  {
    key: 'Julie',
    name: 'Julie',
    modulesCount: 2,
    plantsCount: 5,
    status: 'connected',
  },
];

function DevicesScreen() {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ paddingVertical: 4, paddingHorizontal: 4 }}
        showsVerticalScrollIndicator={false}
        data={devices}
        renderItem={({ item }) => <DeviceCard device={item} />}
        ListFooterComponent={() => (
          <TouchableOpacity style={styles.addDeviceBtn}>
            <Text style={styles.addDeviceText}>Add a new device</Text>
            <ScalableImage
              style={styles.addDeviceIcon}
              source={require('assets/icons/plus.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      />
      {/* <Button onPress={logoutUser} title="Logout" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F5F8F5',
  },
  addDeviceBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#0B7B03',
  },
  addDeviceText: {
    fontSize: 16,
    color: '#0B7B03',
  },
  addDeviceIcon: {
    height: 24,
  },
});

export default DevicesScreen;
