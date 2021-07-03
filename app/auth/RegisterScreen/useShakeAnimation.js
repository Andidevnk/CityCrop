import { useCallback } from 'react';

import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const TIMING_ANIMATION_CONFIG = { duration: 60 };

const useShakeAnimation = () => {
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const shake = useCallback(() => {
    translateX.value = withSequence(
      withTiming(-4, TIMING_ANIMATION_CONFIG),
      withRepeat(withTiming(4, TIMING_ANIMATION_CONFIG), 8, true),
      withTiming(0, TIMING_ANIMATION_CONFIG)
    );
  }, [translateX]);

  return [shake, animatedStyle];
};

export default useShakeAnimation;
