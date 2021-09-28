import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import useFormState from 'shared/hooks/useFormState';

import KeyboardAvoidingScrollView from 'shared/components/KeyboardAvoidingScrollView';
import LightGreenBtn from 'shared/components/LightGreenBtn';
import PhotoInput from './PhotoInput';
import FeedbackStars from './FeedbackStars';
import FeedbackText from './FeedbackText';
import CameraPreviewModal from './CameraPreviewModal';

const GiveFeedbackScreen = ({ navigation }) => {
  const [form, setForm] = useFormState({
    qualityRating: 0,
    colorRating: 0,
    biomaseRating: 0,
    weight: '',
    height: '',
  });
  const [cameraPreviewActive, setCameraPreviewActive] = useState(false);
  const [pictureSource, setPictureSource] = useState(null);
  const [loading, setLoading] = useState(null);

  const closeCameraPreviewModal = () => setCameraPreviewActive(false);
  const dummySubmitFeedback = () => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate({ name: 'Module', merge: true });
      setLoading(false);
    }, 1000);
  };

  return (
    <KeyboardAvoidingScrollView>
      <View style={styles.container}>
        <PhotoInput
          style={styles.photoContainer}
          source={pictureSource}
          onPress={() => setCameraPreviewActive(true)}
          onRemovePicture={() => setPictureSource(null)}
        />
        <View style={styles.inputsContainer}>
          <FeedbackStars
            style={styles.feedbackInput}
            icon={require('assets/icons/star.png')}
            text="Quality"
            rating={form.qualityRating}
            onRatingChange={(rating) => setForm({ qualityRating: rating })}
          />
          <FeedbackStars
            style={styles.feedbackInput}
            icon={require('assets/icons/color.png')}
            text="Color"
            rating={form.colorRating}
            onRatingChange={(rating) => setForm({ colorRating: rating })}
          />
          <FeedbackStars
            style={styles.feedbackInput}
            icon={require('assets/icons/biomass.png')}
            text="Biomass"
            rating={form.biomaseRating}
            onRatingChange={(rating) => setForm({ biomaseRating: rating })}
          />
          <FeedbackText
            style={styles.feedbackInput}
            icon={require('assets/icons/weight.png')}
            text="Weight"
            placeholder="gr"
            keyboardType="numeric"
            value={form.weight}
            onChangeText={(text) => setForm({ weight: text })}
          />
          <FeedbackText
            style={styles.feedbackInput}
            icon={require('assets/icons/height.png')}
            text="Height"
            placeholder="cm"
            keyboardType="numeric"
            value={form.height}
            onChangeText={(text) => setForm({ height: text })}
          />
        </View>
        <LightGreenBtn
          title="Submit"
          loading={loading}
          onPress={dummySubmitFeedback}
        />

        <CameraPreviewModal
          visible={cameraPreviewActive}
          onRequestClose={closeCameraPreviewModal}
          onOutsidePress={closeCameraPreviewModal}
          onPictureTaken={({ uri }) => {
            setPictureSource({ uri });
            closeCameraPreviewModal();
          }}
        />
      </View>
    </KeyboardAvoidingScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#F5F8F5',
    justifyContent: 'space-between',
  },
  photoContainer: {
    alignSelf: 'center',
  },
  inputsContainer: {
    marginVertical: 40,
  },
  feedbackInput: {
    marginBottom: 16,
  },
});

export default GiveFeedbackScreen;
