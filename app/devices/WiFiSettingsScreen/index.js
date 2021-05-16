import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';

import useFormState from 'shared/hooks/useFormState';
import useBooleanState from 'shared/hooks/useBooleanState';
import {
  connectToNetworkAsync,
  listNetworksAsync,
} from 'shared/store/networks/actions';
import ListModal from 'shared/components/ListModal';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import KeyboardDismissArea from 'shared/components/KeyboardDismissArea';
import PressableTextInput from 'shared/components/PressableTextInput';
import OutlinedGreenBtn from 'shared/components/OutlinedGreenBtn';

const WiFiSettingsScreen = ({ navigation }) => {
  const [form, setForm] = useFormState({
    network: '',
    password: '',
  });
  const [networks, setNetworks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNetworksModalVisible, openNetworksModal, closeNetworksModal] =
    useBooleanState(false);
  const [hasTriedToConnect, setHasTriedToConnect] = useState(false);

  const dispatch = useDispatch();
  const navigateToDevices = () => navigation.navigate('Devices');
  const getNetworks = useCallback(
    () =>
      dispatch(listNetworksAsync()).then(({ data: networks }) => {
        if (networks.length > 0) setForm({ network: networks[0].ssid }); // Autocomplete input with first network
        setNetworks(networks);
      }),
    [dispatch, setForm]
  );
  const connectToNetwork = () => {
    setIsLoading(true);
    dispatch(connectToNetworkAsync(form.network, form.password)).finally(() => {
      setIsLoading(false);
      setHasTriedToConnect(true);
    });
  };

  return (
    <KeyboardDismissArea>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Change WiFi settings</Text>
          <Text style={{ fontSize: 14, color: '#18191F' }}>
            First connect to the{' '}
            <Text style={{ fontWeight: 'bold' }}>CityCrop</Text> WiFi network
            and then press <Text style={{ fontWeight: 'bold' }}>Refresh</Text>{' '}
            to get the available networks.
          </Text>

          <View style={{ marginVertical: 40 }}>
            <PressableTextInput
              containerStyle={{ marginBottom: 20 }}
              style={styles.input}
              placeholder="WiFi Network"
              value={form.network}
              onPress={openNetworksModal}
            />
            <ListModal
              visible={isNetworksModalVisible}
              data={networks}
              keyExtractor={(item) => item.ssid}
              renderItemContent={(item) => item.ssid}
              onItemPress={(network) => {
                setForm({ network: network.ssid });
                closeNetworksModal();
              }}
              onOutsidePress={closeNetworksModal}
              onRequestClose={closeNetworksModal} // Back button press
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              autoCompleteType="password"
              secureTextEntry={true}
              value={form.password}
              onChangeText={(text) => setForm({ password: text })}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, marginRight: 15 }}>
              <OutlinedGreenBtn
                icon={require('assets/icons/refresh.png')}
                title="Refresh"
                onPress={getNetworks}
              />
            </View>
            <View style={{ flex: 1 }}>
              <LightGreenBtn
                style={{ width: '100%' }}
                title="Connect"
                loading={isLoading}
                disabled={!form.network || !form.password}
                onPress={connectToNetwork}
              />
            </View>
          </View>
        </View>

        <LightGreenBtn
          style={{ marginTop: 30 }}
          title="Complete"
          disabled={!hasTriedToConnect}
          onPress={navigateToDevices}
        />
      </View>
    </KeyboardDismissArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#18191F',
  },
  input: {
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      height: 1,
    },
    shadowOpacity: 0.1,
  },
});

export default WiFiSettingsScreen;
