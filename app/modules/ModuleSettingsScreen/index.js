import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';

import useFormState from 'shared/hooks/useFormState';
import useBooleanState from 'shared/hooks/useBooleanState';
import {
  deleteModuleAsync,
  updateModuleAsync,
} from 'shared/store/modules/actions';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import WarningModal from 'shared/components/WarningModal';
import ConfirmationModal from 'shared/components/ConfirmationModal';
import TraySelector from 'shared/components/TraySelector';

const ModuleSettingsScreen = ({
  navigation,
  route: {
    params: { module },
  },
}) => {
  const [formState, setFormState] = useFormState({
    name: module.name,
    serialNumber: module.serialNumber,
    type: module.tray,
  });
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);
  const [showChangeTypeErrorText, setShowChangeTypeErrorText] = useState(false);
  const [isWarningModalVisible, openWarningModal, closeWarningModal] =
    useBooleanState(false);
  const [
    isConfirmationModalVisible,
    openConfirmationModal,
    closeConfirmationModal,
  ] = useBooleanState(false);

  const moduleHasPlants = module.plants.length > 0;

  const dispatch = useDispatch();
  const updateModule = () => {
    const { name, type } = formState;
    setIsUpdateLoading(true);
    dispatch(updateModuleAsync(module.id, name, type))
      .then(() => navigation.goBack())
      .finally(() => setIsUpdateLoading(false));
  };
  const deleteModule = () =>
    dispatch(deleteModuleAsync(module.id)).then(() => navigation.goBack());

  return (
    <View style={styles.container}>
      <WarningModal
        visible={isWarningModalVisible}
        message="This module contains plants. If you delete it, you will NOT be able to access them."
        onOKPress={() => {
          closeWarningModal();
          openConfirmationModal();
        }}
        onRequestClose={() => {
          closeWarningModal();
          openConfirmationModal();
        }}
      />
      <ConfirmationModal
        visible={isConfirmationModalVisible}
        onAcceptPress={deleteModule}
        onRequestClose={closeConfirmationModal}
      />

      <Text style={styles.title}>Edit your module settings</Text>
      <TextInput
        style={[styles.input, { marginBottom: 15 }]}
        placeholder="Name"
        value={formState.name}
        onChangeText={(text) => setFormState({ name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Serial Number"
        value={formState.serialNumber}
        editable={false}
      />
      <TraySelector
        style={{ marginTop: 50 }}
        value={formState.type}
        onOptionPress={(type) => {
          if (moduleHasPlants) {
            setShowChangeTypeErrorText(true);
            return;
          }
          setFormState({ type });
        }}
      />
      {showChangeTypeErrorText && (
        <Text style={{ marginTop: 5, textAlign: 'center', color: 'red' }}>
          Can't change type, module contains plants.
        </Text>
      )}
      <LightGreenBtn
        style={{ marginTop: 'auto' }}
        title="Save"
        loading={isUpdateLoading}
        onPress={updateModule}
      />
      <Pressable
        style={{ marginTop: 20, alignItems: 'center' }}
        onPress={() => {
          if (module.plants.length > 0) openWarningModal();
          else openConfirmationModal();
        }}
      >
        <Text style={{ fontSize: 16, color: 'red' }}>Delete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#18191F',
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

export default ModuleSettingsScreen;
