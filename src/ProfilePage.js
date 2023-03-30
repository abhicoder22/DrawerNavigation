import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import useGallery from './Hooks/useGallery';

const ProfilePage = () => {
  const [cameraUri, setcameraUri] = useState('');
  const [galleryUri, openGallery] = useGallery();

  const openCamera = () => {
    const options = {
      storageOption: {
        path: 'Photos',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchCamera(options, response => {
      console.log('Response =', response);
      if (response.didCancel) {
        console.log('user cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker error: ', response.error);
      } else if (response.customButton) {
        console.log('user tapped custom button: ', response.customButton);
      } else {
        setcameraUri(response.assets[0].uri);
      }
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          flex: 1,
        }}>
        <Button
          title="open camera"
          onPress={() => {
            openCamera();
            console.log('pressed');
          }}
        />
        <Image
          source={{uri: cameraUri}}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: 'black',
          }}
        />

        <Button
          title="open gallery"
          onPress={() => {
            openGallery();
            console.log('pressed');
          }}
        />
        <Image
          source={{uri: galleryUri}}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: 'black',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0dcdc',
  },
  buttonStyle: {
    backgroundColor: 'skyblue',
    marginTop: 20,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
