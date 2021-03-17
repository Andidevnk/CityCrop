import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const ToggleButtons = ({ selection, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, selection === 'greens' && styles.activeButton]}
        onPress={() => onPress('greens')}
      >
        <Text
          style={[styles.text, selection === 'greens' && styles.activeText]}
        >
          Greens
        </Text>
      </Pressable>
      <Pressable
        style={[
          styles.button,
          selection === 'microgreens' && styles.activeButton,
        ]}
        onPress={() => onPress('microgreens')}
      >
        <Text
          style={[
            styles.text,
            selection === 'microgreens' && styles.activeText,
          ]}
        >
          Microgreens
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    borderWidth: 1.5,
    borderColor: '#0B7B03',
    overflow: 'hidden',
  },
  button: {
    width: '48%',
    paddingVertical: 12,
  },
  activeButton: {
    width: '52%',
    backgroundColor: '#0B7B03',
    borderRadius: 26,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#18191F',
  },
  activeText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default ToggleButtons;
