import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SimpleModal from 'shared/components/SimpleModal';
import { ShadowStyles } from 'shared/styles';

const ConfirmationModalWithFeedback = ({
  onAcceptPress,
  onCancelPress,
  onRequestClose,
  onGiveFeedbackPress,
  ...props
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
      showCloseButton
      {...props}
    >
      <>
        <Text style={styles.text}>
          Are you sure you want to remove the plant?
        </Text>
        <Text style={styles.subtext}>
          Would you like to give us feedback on how it went?
        </Text>
        <TouchableOpacity
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 25,
            paddingVertical: 18,
            borderRadius: 15,
            elevation: 2,
            ...ShadowStyles.shadow2,
          }}
          onPress={onGiveFeedbackPress}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#18191F' }}>
            Give Feedback
          </Text>
          <Ionicons name="chevron-forward" size={26} color="#59C901" />
        </TouchableOpacity>
        <View style={styles.buttonsContainer}>
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
          <TouchableHighlight
            style={[
              styles.button,
              { marginLeft: 20, backgroundColor: 'rgba(255, 0, 0, 0.8)' },
            ]}
            underlayColor="rgba(255, 0, 0, 1)"
            activeOpacity={1}
            onPress={onYesPress}
          >
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableHighlight>
        </View>
      </>
    </SimpleModal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    alignItems: 'center',
    marginHorizontal: '10%',
    paddingTop: 60,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#18191F',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  subtext: {
    fontSize: 16,
    color: '#18191F',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
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

export default ConfirmationModalWithFeedback;
