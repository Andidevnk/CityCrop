import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
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
import LightGreenBtn from 'shared/components/LightGreenBtn';
import ListModal from 'shared/components/ListModal';
import KeyboardDismissArea from 'shared/components/KeyboardDismissArea';
import ScalableImage from 'shared/components/ScalableImage';

const Step5 = ({ navigation }) => {
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
            Select the WiFi network your device will connect to below and
            provide its password. You can scan for networks again by pressing{' '}
            <Text style={{ fontWeight: 'bold' }}>Refresh</Text>. When you are
            done, press <Text style={{ fontWeight: 'bold' }}>Connect</Text>.
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
