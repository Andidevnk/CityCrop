import React, { useMemo } from 'react';
import { Image } from 'react-native';

const ScalableImage = ({ style, source, ...restProps }) => {
  // Transform array styles into object to have uniform handling
  if (Array.isArray(style)) style = Object.assign({}, ...style);

  const extraStyle = useMemo(() => {
    const { width, height } = Image.resolveAssetSource(source);
    const aspectRatio = width / height;

    let extraStyle;
    if (style.width && !style.height) {
      extraStyle = {
        height: style.width / aspectRatio,
      };
    } else if (style.height && !style.width) {
      extraStyle = {
        width: style.height * aspectRatio,
      };
    } else {
      extraStyle = {};
    }

    return extraStyle;
  }, [style, source]);

  return (
    <Image
      style={{
        ...style,
        ...extraStyle,
      }}
      source={source}
      {...restProps}
    />
  );
};

export default ScalableImage;
