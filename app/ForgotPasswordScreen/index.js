import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';

import KeyboardDismissArea from 'shared/components/KeyboardDismissArea';
import IconTextInput from 'shared/components/IconTextInput';
import GreenBtn from 'shared/components/GreenBtn';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const sendResetPasswordEmail = () => {
    console.log('Send');
    setModalVisible(true);
  };

  const closeModalAndNavigateToLogin = () => {
    setModalVisible(false);
    navigation.navigate('Login');
  };

  return (
    <KeyboardDismissArea>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Forgot password</Text>
          <Text style={styles.subtitle}>
            Insert email to send verification code.
          </Text>
        </View>

        <IconTextInput
          iconImage={require('assets/icons/mail.png')}
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          onChangeText={(text) => setEmail(text)}
        />

        <View style={styles.bottomSection}>
          <GreenBtn title="Send" onPress={sendResetPasswordEmail} />
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          statusBarTranslucent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                We have sent you an email. Please check your inbox.
              </Text>
              <GreenBtn
                title="Go back to login"
                onPress={closeModalAndNavigateToLogin}
              />
            </View>
          </View>
        </Modal>
      </View>
    </KeyboardDismissArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F8F5',
  },
  titleContainer: {
    marginTop: 100,
    marginBottom: 70,
    alignItems: 'center',
  },
  title: {
    marginBottom: 5,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0B7B03',
  },
  subtitle: {
    fontSize: 16,
    color: '#18191F',
  },
  bottomSection: {
    marginTop: 50,
    paddingHorizontal: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    marginHorizontal: 25,
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginTop: 40,
    marginBottom: 60,
    textAlign: 'center',
    fontSize: 18,
    color: '#18191F',
  },
});

export default ForgotPasswordScreen;
