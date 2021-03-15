import React, { useMemo } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const ActionButton = ({ iconSource, title, ...restProps }) => {
  const iconAspectRatio = useMemo(() => {
    const { width, height } = Image.resolveAssetSource(iconSource);
    return width / height;
  }, [iconSource]);

  return (
    <TouchableOpacity
      {...restProps}
      style={{ ...styles.actionBtn, ...restProps.style }}
    >
      <Image
        style={{
          ...styles.actionIcon,
          width: iconAspectRatio * styles.actionIcon.height,
        }}
        source={iconSource}
        fadeDuration={0}
        resizeMode="contain"
      />
      <Text style={styles.actionText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#0B7B03',
  },
  actionIcon: {
    height: 24,
    marginRight: 12,
  },
  actionText: {
    flex: 1,
    fontSize: 12,
    color: '#18191F',
  },
});

export default ActionButton;
