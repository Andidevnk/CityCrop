import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

const KeyboardAvoidingScrollView = ({
  contentContainerStyle,
  style,
  children,
  ...props
}) => {
  const headerHeight = useHeaderHeight();

  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';
  const keyboardVerticalOffset =
    Platform.OS === 'ios'
      ? headerHeight + StatusBar.currentHeight
      : headerHeight;

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={behavior}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <ScrollView
        style={style}
        contentContainerStyle={[
          styles.scrollViewContentContainer,
          contentContainerStyle,
        ]}
        bounces={false}
        {...props}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContentContainer: {
    flexGrow: 1,
  },
});

export default KeyboardAvoidingScrollView;
