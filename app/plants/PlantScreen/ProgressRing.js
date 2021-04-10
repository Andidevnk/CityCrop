import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const calcCircleParams = (progress, height, strokeWidth) => {
  const radius = (height - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const cx = height / 2;
  const cy = height / 2;
  return { radius, circumference, strokeDashoffset, cx, cy };
};

const ProgressRing = ({ progress, height, strokeWidth }) => {
  const { radius, circumference, strokeDashoffset, cx, cy } = calcCircleParams(
    progress,
    height,
    strokeWidth
  );
  return (
    <Svg width={height} height={height} style={styles.container}>
      <Circle
        stroke="#D8D8D8"
        fill="none"
        strokeWidth={strokeWidth}
        cx={cx}
        cy={cy}
        r={radius}
      />
      <Circle
        stroke="#59C901"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        strokeWidth={strokeWidth}
        cx={cx}
        cy={cy}
        r={radius}
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    transform: [{ rotateZ: '270deg' }],
  },
});

export default ProgressRing;
