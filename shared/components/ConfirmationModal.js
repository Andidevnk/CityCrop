import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import SimpleModal from './SimpleModal';

const ConfirmationModal = ({
  onAcceptPress,
  onCancelPress,
  onRequestClose,
  ...rest
}) => {
  const onYesPress = () => {
    if (onAcceptPress) onAcceptPress();
    onRequestClose();
  };
  const onNoPress = () => {
    if (onCancelPress) onCancelPress();
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
        <Text style={styles.text}>Are you sure?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableHighlight
            style={[
              styles.button,
              { marginRight: 20, backgroundColor: 'rgba(255, 0, 0, 0.8)' },
            ]}
            underlayColor="rgba(255, 0, 0, 1)"
            activeOpacity={1}
            onPress={onYesPress}
          >
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[
              styles.button,
              { backgroundColor: 'rgba(204, 204, 204, 0.8)' },
            ]}
            underlayColor="rgba(204, 204, 204, 1)"
            activeOpacity={1}
            onPress={onNoPress}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableHighlight>
        </View>
      </>
    </SimpleModal>
  );
};

export default ConfirmationModal;

const styles = StyleSheet.create({
  modalContent: {
    alignItems: 'center',
    marginHorizontal: '16%',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#18191F',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 26,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
