import React from 'react';
import { StyleSheet, Text } from 'react-native';

import SimpleModal from 'shared/components/SimpleModal';
import CameraPreview from 'shared/components/CameraPreview';

const CameraPreviewModal = ({ onPictureTaken, ...props }) => (
  <SimpleModal contentStyle={styles.modalContent} {...props}>
    <Text style={styles.text}>Take a picture of your plant!</Text>
    <CameraPreview onPictureTaken={onPictureTaken} />
  </SimpleModal>
);

const styles = StyleSheet.create({
  modalContent: {
    padding: 20,
    maxHeight: 'auto',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#18191F',
    marginBottom: 20,
  },
});

export default CameraPreviewModal;
