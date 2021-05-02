import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import { useDispatch } from 'react-redux';

import useFormState from 'shared/hooks/useFormState';
import {
  connectToNetworkAsync,
  listNetworksAsync,
} from 'shared/store/networks/actions';
import ListModal from 'shared/components/ListModal';
import ScalableImage from 'shared/components/ScalableImage';
import LightGreenBtn from 'shared/components/LightGreenBtn';

const WiFiSettingsScreen = ({ navigation }) => {
  const [form, setForm] = useFormState({
    network: '',
    password: '',
  });
  const [isNetworksModalVisible, setIsNetworksModalVisible] = useState(false);
  const [networks, setNetworks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const getNetworks = useCallback(
    () => dispatch(listNetworksAsync()).then(({ data }) => setNetworks(data)),
    [dispatch]
  );
  const closeNetworksModal = () => setIsNetworksModalVisible(false);
  const connectToNetwork = () => {
    setIsLoading(true);
    dispatch(connectToNetworkAsync(form.network, form.password)).then(() => {
      setIsLoading(false);
      navigation.navigate('Devices');
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Change WiFi settings</Text>
        <Text style={{ fontSize: 14, color: '#18191F' }}>
          First connect to the{' '}
          <Text style={{ fontWeight: 'bold' }}>CityCrop</Text> WiFi network and
          then press <Text style={{ fontWeight: 'bold' }}>Refresh</Text> to get
          the available networks.
        </Text>

        <View style={{ marginVertical: 40 }}>
          <Pressable
            style={{ marginBottom: 20 }}
            onPress={() => setIsNetworksModalVisible(true)}
          >
            <TextInput
              style={styles.input}
              placeholder="WiFi Network"
              value={form.network}
              pointerEvents="none"
              editable={false}
            />
          </Pressable>
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

        <TouchableHighlight
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            padding: 20,
            borderWidth: 1.5,
            borderRadius: 15,
            borderColor: '#0B7B03',
          }}
          underlayColor="#EEEEEE"
          onPress={getNetworks}
        >
          <>
            <ScalableImage
              style={{ height: 20, marginRight: 10 }}
              source={require('assets/icons/refresh.png')}
            />
            <Text style={{ fontSize: 16, color: '#0B7B03' }}>Refresh</Text>
          </>
        </TouchableHighlight>
      </View>

      <LightGreenBtn
        style={{ marginTop: 30 }}
        title="Connect"
        loading={isLoading}
        onPress={connectToNetwork}
      />
    </View>
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
