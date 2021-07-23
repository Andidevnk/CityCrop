import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import SimpleModal from './SimpleModal';

const WarningModal = ({ message, onOKPress, onRequestClose, ...rest }) => {
  const onOKPress_ = () => {
    if (onOKPress) onOKPress();
    onRequestClose();
  };

  return (
    <SimpleModal
      contentStyle={styles.modalContent}
      onRequestClose={onRequestClose}
      onOutsidePress={onRequestClose}
      {...rest}
    >
      <>
        <Text style={styles.warningText}>Warning</Text>
        <Text style={styles.message}>{message}</Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor="rgba(204, 204, 204, 1)"
          activeOpacity={1}
          onPress={onOKPress_}
        >
          <Text style={styles.buttonText}>OK</Text>
        </TouchableHighlight>
      </>
    </SimpleModal>
  );
};

export default WarningModal;

const styles = StyleSheet.create({
  modalContent: {
    alignItems: 'center',
    marginHorizontal: '16%',
  },
  warningText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(255, 0, 0, 0.8)',
  },
  message: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#18191F',
  },
  button: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: 'rgba(204, 204, 204, 0.8)',
    borderRadius: 26,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
