import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as Sharing from 'expo-sharing';

const MyShareScreen = ({ imageData }) => {
  // const [image, setImage] = React.useState(
  //   'file:///C:/Users/Gaurav/Pictures/Saved%20Pictures/lona-0BaEdsR8IRY-unsplash.jpg',
  // );

  console.log(imageData);
  //const [image, setImage] = React.useState('');
  let [pickerImage, setPickerImage] = React.useState('');
  let [selectedImage, setSelectedImage] = React.useState('');

  let openShareDialogAsync = async () => {
    console.log('called');
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  };

  useEffect(() => {
    //setSelectedImage(imageData);
    setSelectedImage({ localUri: imageData });
    //openShareDialogAsync(selectedImage);
  }, [imageData]);

  return (
    <>
      <View style={styles.container}>
        <Text>My screen share!</Text>
        <StatusBar style='auto' />

        <Image
          source={{ uri: selectedImage.localUri }}
          style={{ ...styles.containerImg, ...styles.stretchImg }}
        />

        <View style={{ marginVertical: 5 }}>
          {imageData && (
            <Button onPress={openShareDialogAsync} title='Share Image' />
          )}
          {/* {imageData && (
            <Button onPress={onShareImageUpdate} title='Share Image' />
          )} */}
        </View>
        {/* <View>
          <Button
            onPress={openImagePickerAsync}
            title='Select Image from Gallery'
          />
        </View> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImg: {
    paddingTop: 50,
    marginVertical: 20,
  },
  stretchImg: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
});

export default MyShareScreen;
