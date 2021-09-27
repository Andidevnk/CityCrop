import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { Camera } from 'expo-camera';
import ScalableImage from './ScalableImage';

const CAMERA_RATIO = '16:9';
const CAMERA_RATIO_NUMBER =
  CAMERA_RATIO.split(':')[0] / CAMERA_RATIO.split(':')[1];

const CameraPreview = ({ onPictureTaken }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const { width: windowWidth } = useWindowDimensions();
  const cameraRef = useRef();
  const cameraPreviewWidth = windowWidth * 0.8;
  const cameraPreviewHeight = cameraPreviewWidth * CAMERA_RATIO_NUMBER;

  useEffect(() => {
    Camera.requestPermissionsAsync().then(({ status }) =>
      setHasPermission(status === 'granted')
    );
  }, []);

  if (hasPermission === null) return null;
  if (hasPermission === false) return <Text>No access to camera</Text>;
  return (
    <View
      style={{
        width: cameraPreviewWidth,
        height: cameraPreviewHeight,
        borderRadius: 10,
        overflow: 'hidden',
      }}
    >
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={Camera.Constants.Type.back}
        ratio={CAMERA_RATIO}
      >
        <View style={styles.cameraButtonContainer}>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() =>
              cameraRef.current.takePictureAsync().then(onPictureTaken)
            }
          >
            <ScalableImage
              style={styles.cameraIcon}
              source={require('assets/icons/camera-white.png')}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  cameraButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraButton: {
    marginBottom: 20,
  },
  cameraIcon: {
    width: 50,
  },
});

export default CameraPreview;
