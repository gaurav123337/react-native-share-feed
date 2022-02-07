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
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import file from '../assets/base64';
//import file from '../assets/adaptive-icon.png';

const url = 'https://awesome.contents.com/';
const title = 'Awesome Contents';
const message = 'Please check this out.';

const options = {
  title,
  url,
  message,
};

const MyShareScreen = ({ imageData }) => {
  // const [image, setImage] = React.useState(
  //   'file:///C:/Users/Gaurav/Pictures/Saved%20Pictures/lona-0BaEdsR8IRY-unsplash.jpg',
  // );

  console.log(imageData);
  //const [image, setImage] = React.useState('');

  let [selectedImage, setSelectedImage] = React.useState('../assets/logo.jpg');
  useEffect(() => {
    //setSelectedImage(imageData);
    setSelectedImage({ localUri: imageData });
  }, [imageData]);
  console.log(imageData);

  //   let openImagePickerAsync = async () => {
  //     let permissionResult =
  //       await ImagePicker.requestMediaLibraryPermissionsAsync();

  //     if (permissionResult.granted === false) {
  //       alert('Permission to access camera roll is required!');
  //       return;
  //     }

  //     let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //     if (pickerResult.cancelled === true) {
  //       return;
  //     }

  //     setSelectedImage({ localUri: pickerResult.uri });
  //   };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  return (
    <>
      <View style={styles.container}>
        <Text>My screen share!</Text>
        <StatusBar style='auto' />
        {/* <Image
          source={{
            uri: image,
          }}
          style={{ ...styles.containerImg, ...styles.stretchImg }}
        /> */}
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        {/* <Text>{image}</Text> */}
        <View style={{ marginVertical: 5 }}>
          <Button onPress={openShareDialogAsync} title='Share Image' />
        </View>
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
