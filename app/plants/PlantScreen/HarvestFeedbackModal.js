import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import SimpleModal from 'shared/components/SimpleModal';

const HarvestFeedbackModal = ({
  onAcceptPress,
  onCancelPress,
  onRequestClose,
  ...props
}) => (
  <SimpleModal
    contentStyle={styles.modalContent}
    onRequestClose={onRequestClose}
    onOutsidePress={onRequestClose}
    showCloseButton
    {...props}
  >
    <>
      <Text style={styles.text}>
        Would you like to give us feedback on how it went?
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableHighlight
          style={[
            styles.button,
            { backgroundColor: 'rgba(204, 204, 204, 0.8)' },
          ]}
          underlayColor="rgba(204, 204, 204, 1)"
          activeOpacity={1}
          onPress={onCancelPress}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[
            styles.button,
            { marginLeft: 20, backgroundColor: '#59C901' },
          ]}
          underlayColor="#47a101"
          activeOpacity={1}
          onPress={onAcceptPress}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableHighlight>
      </View>
    </>
  </SimpleModal>
);

const styles = StyleSheet.create({
  modalContent: {
    alignItems: 'center',
    marginHorizontal: '10%',
    paddingTop: 60,
  },
  text: {
    fontSize: 18,
    color: '#18191F',
    textAlign: 'center',
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

export default HarvestFeedbackModal;
