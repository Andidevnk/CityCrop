import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const ModuleTypeToggler = ({ style, value, onOptionPress }) => (
  <View style={[styles.container, style]}>
    <Pressable
      style={[
        styles.button,
        styles.leftButtonBorderRadius,
        ...(value === 'greens' ? [styles.activeButton] : []),
      ]}
      onPress={() => onOptionPress('greens')}
    >
      <Text
        style={[
          styles.text,
          ...(value === 'greens' ? [styles.activeText] : []),
        ]}
      >
        Greens
      </Text>
    </Pressable>
    <Pressable
      style={[
        styles.button,
        styles.rightButtonBorderRadius,
        ...(value === 'microgreens' ? [styles.activeButton] : []),
      ]}
      onPress={() => onOptionPress('microgreens')}
    >
      <Text
        style={[
          styles.text,
          ...(value === 'microgreens' ? [styles.activeText] : []),
        ]}
      >
        Microgreens
      </Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0B7B03',
    borderRadius: 30,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  leftButtonBorderRadius: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  rightButtonBorderRadius: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  activeButton: {
    backgroundColor: '#0B7B03',
  },
  text: {
    fontSize: 18,
    color: '#18191F',
  },
  activeText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default ModuleTypeToggler;
