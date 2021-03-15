import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';

import ScalableImage from 'shared/components/ScalableImage';
import IconButton from 'shared/components/IconButton';
import GreenBtn from 'shared/components/GreenBtn';

const ConfirmationModal = ({
  visible,
  selectedNutrients,
  onRequestClose,
  onConfirmPress,
  onCancelPress,
}) => (
  <Modal
    visible={visible}
    animationType="fade"
    transparent={true}
    statusBarTranslucent={true}
    onRequestClose={onRequestClose}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <IconButton
          style={styles.closeIcon}
          name="close"
          size={30}
          color="#0B7B03"
          onPress={onRequestClose}
        />
        <Text style={styles.text}>
          Are you sure that you want to reset these nutrients?
        </Text>
        <View style={styles.nutrientsContainer}>
          {selectedNutrients.map(({ id, name, icon }, index) => (
            <View
              key={id}
              style={[
                styles.nutrientContainer,
                index !== selectedNutrients.length - 1 && { marginBottom: 25 },
              ]}
            >
              <ScalableImage style={styles.nutrientIcon} source={icon} />
              <Text style={styles.nutrientName}>{name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.buttonsContainer}>
          <GreenBtn
            style={{ flex: 1, marginRight: 10, width: 'auto' }}
            title="Confirm"
            onPress={onConfirmPress}
          />
          <GreenBtn
            style={{ flex: 1, width: 'auto' }}
            title="Cancel"
            outlined
            onPress={onCancelPress}
          />
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    width: '86%',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
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
  closeIcon: {
    position: 'absolute',
    top: 25,
    right: 30,
  },
  text: {
    marginTop: 50,
    marginBottom: 42,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#18191F',
  },
  nutrientsContainer: {
    width: '100%',
    paddingHorizontal: 44,
    marginBottom: 65,
  },
  nutrientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nutrientIcon: {
    height: 22,
    marginRight: 15,
  },
  nutrientName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#18191F',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});

export default ConfirmationModal;
