import React from 'react';
import { View } from 'react-native';

const RectangleWithCutoffInnerShape = ({
  cutoffPosition,
  rectHeight,
  borderHeight,
  backgroundColor,
}) => {
  if (cutoffPosition === 'bottom-left') {
    return (
      <>
        <View
          style={{
            height: rectHeight,
            backgroundColor: backgroundColor,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <View
          style={{
            borderTopWidth: borderHeight,
            borderTopColor: backgroundColor,
            borderLeftWidth: borderHeight,
            borderLeftColor: 'transparent',
            borderBottomRightRadius: 10,
          }}
        />
      </>
    );
  }
  if (cutoffPosition === 'bottom-right') {
    return (
      <>
        <View
          style={{
            height: rectHeight,
            backgroundColor: backgroundColor,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <View
          style={{
            borderTopWidth: borderHeight,
            borderTopColor: backgroundColor,
            borderRightWidth: borderHeight,
            borderRightColor: 'transparent',
            borderBottomLeftRadius: 10,
          }}
        />
      </>
    );
  }
  if (cutoffPosition === 'top-left') {
    return (
      <>
        <View
          style={{
            borderBottomWidth: borderHeight,
            borderBottomColor: backgroundColor,
            borderLeftWidth: borderHeight,
            borderLeftColor: 'transparent',
            borderTopRightRadius: 10,
          }}
        />
        <View
          style={{
            height: rectHeight,
            backgroundColor: backgroundColor,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
      </>
    );
  }
  if (cutoffPosition === 'top-right') {
    return (
      <>
        <View
          style={{
            borderBottomWidth: borderHeight,
            borderBottomColor: backgroundColor,
            borderRightWidth: borderHeight,
            borderRightColor: 'transparent',
            borderTopLeftRadius: 10,
          }}
        />
        <View
          style={{
            height: rectHeight,
            backgroundColor: backgroundColor,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
      </>
    );
  }
  throw new Error('Invalid value for cutoffPosition prop.');
};

export default RectangleWithCutoffInnerShape;
