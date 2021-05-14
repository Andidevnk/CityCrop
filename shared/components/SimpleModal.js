import React from 'react';
import { StyleSheet, Text, Modal, Pressable } from 'react-native';

import IconButton from 'shared/components/IconButton';

const SimpleModal = ({
  contentStyle,
  children,
  showCloseButton,
  onOutsidePress,
  onRequestClose,
  ...props
}) => (
  <Modal
    animationType="fade"
    transparent={true}
    statusBarTranslucent={true}
    onRequestClose={onRequestClose}
    {...props}
  >
    <Pressable style={styles.modalContainer} onPress={onOutsidePress}>
      {/* We use Pressable here to capture click and not propagate to parent's onPress */}
      <Pressable style={[styles.modalContent, contentStyle]}>
        {showCloseButton && (
          <IconButton
            style={styles.closeIcon}
            name="close"
            size={30}
            color="#0B7B03"
            onPress={onRequestClose}
          />
        )}
        {typeof children == 'string' ? (
          <Text style={styles.text}>{children}</Text>
        ) : (
          children
        )}
      </Pressable>
    </Pressable>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    maxHeight: '70%',
    marginHorizontal: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 30,
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  text: {
    fontSize: 15,
    color: '#18191F',
  },
});

export default SimpleModal;
