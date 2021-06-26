import React, { useCallback, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useSelector, useDispatch } from 'react-redux';

import { hideAlert } from 'shared/store/alert/actions';

const AlertSnackBar = () => {
  const message = useSelector((state) => state.alert.message);
  const dispatch = useDispatch();

  // Fade-in/out animation
  const opacity = useSharedValue(0);
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: interpolate(opacity.value, [0, 1], [20, 0]) }],
  }));

  const hideAlertMemo = useCallback(() => {
    dispatch(hideAlert());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      opacity.value = withSequence(
        withTiming(1, 300),
        withDelay(
          5000,
          withTiming(0, 300, () => runOnJS(hideAlertMemo)())
        )
      );
    }
  }, [message, hideAlertMemo, opacity]);

  if (!message) return null;

  return (
    <Animated.View style={[styles.container, containerAnimatedStyle]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '90%',
    backgroundColor: '#f44336',
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default AlertSnackBar;
