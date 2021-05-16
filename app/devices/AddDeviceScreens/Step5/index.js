import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';

import useFormState from 'shared/hooks/useFormState';
import useBooleanState from 'shared/hooks/useBooleanState';
import {
  connectToNetworkAsync,
  listNetworksAsync,
} from 'shared/store/networks/actions';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import ListModal from 'shared/components/ListModal';
import KeyboardDismissArea from 'shared/components/KeyboardDismissArea';
import PressableTextInput from 'shared/components/PressableTextInput';
import OutlinedGreenBtn from 'shared/components/OutlinedGreenBtn';

const Step5 = ({ navigation }) => {
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

  useEffect(() => {
    getNetworks();
  }, [getNetworks]);

  return (
    <KeyboardDismissArea>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Step 5</Text>
          <Text style={styles.subtitle}>Connect your device to WiFi</Text>

          <Text>
            Select a WiFi network, provide its password and press{' '}
            <Text style={{ fontWeight: 'bold' }}>Connect</Text> to connect your
            device to WiFi. You can scan for networks again by pressing{' '}
            <Text style={{ fontWeight: 'bold' }}>Refresh</Text>. When the light
            on your device stops blinking, you can press{' '}
            <Text style={{ fontWeight: 'bold' }}>Complete</Text> to complete
            this setup.
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
    padding: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 5,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#59C901',
  },
  subtitle: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#18191F',
  },
  listContainer: {
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  listNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#59C901',
    marginRight: 5,
  },
  listItemText: {
    fontSize: 16,
    color: '#18191F',
    flex: 1,
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

export default Step5;
