import React from 'react';
import { StyleSheet, Text } from 'react-native';

import LightGreenBtn from 'shared/components/LightGreenBtn';
import SimpleModal from 'shared/components/SimpleModal';

const ErrorModal = ({ onClose, ...props }) => (
  <SimpleModal
    contentStyle={styles.content}
    onOutsidePress={onClose}
    onRequestClose={onClose}
    {...props}
  >
    <Text style={styles.text}>
      Unfortunately we couldn't connect your device to WiFi. Please try again.
    </Text>
    <LightGreenBtn style={styles.button} title="OK" onPress={onClose} />
  </SimpleModal>
);

export default ErrorModal;

const styles = StyleSheet.create({
  content: {
    padding: 30,
    paddingBottom: 20,
  },
  text: {
    fontSize: 15,
    color: '#18191F',
    textAlign: 'center',
  },
  button: {
    width: '50%',
    padding: 10,
    marginTop: 20,
  },
});
