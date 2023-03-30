import React, {useState} from 'react';
import {View} from 'react-native/types';
import {launchImageLibrary} from 'react-native-image-picker';

export default () => {
  const [galleryUri, setgalleryUri] = useState('');

  const openGallery = () => {
    let options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      console.log('Response =', response);
      if (response.didCancel) {
        console.log('user cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker error: ', response.error);
      } else if (response.customButton) {
        console.log('user tapped custom button: ', response.customButton);
      } else {
        setgalleryUri(response.assets[0].uri);
      }
    });
  };

  return [galleryUri, openGallery];
};
