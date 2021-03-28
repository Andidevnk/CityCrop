import React from 'react';
import { View } from 'react-native';

import RectangleWithCutoffInnerShape from './RectangleWithCutoffInnerShape';

const RectangleWithCutoff = ({
  style,
  cutoffPosition,
  height,
  backgroundColor,
}) => {
  const rectHeightPercentage = 0.67;
  const [rectHeight, borderHeight] = [
    height * rectHeightPercentage,
    height - height * rectHeightPercentage,
  ];

  return (
    <View style={style}>
      <RectangleWithCutoffInnerShape
        cutoffPosition={cutoffPosition}
        rectHeight={rectHeight}
        borderHeight={borderHeight}
        backgroundColor={backgroundColor}
      />
    </View>
  );
};

export default RectangleWithCutoff;
