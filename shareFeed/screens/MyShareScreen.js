import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Share } from 'react-native';
// import file from '../assets/base64';
//import file from '../assets/adaptive-icon.png';

const url = 'https://awesome.contents.com/';
const title = 'Awesome Contents';
const message = 'Please check this out.';

const options = {
  title,
  url,
  message,
};

const MyShareScreen = () => {
  // const [image, setImage] = React.useState(
  //   'file:///C:/Users/Gaurav/Pictures/Saved%20Pictures/lona-0BaEdsR8IRY-unsplash.jpg',
  // );
  const [image, setImage] = React.useState('');
  const share = async (customOptions = options) => {
    try {
      await Share.share(customOptions);
    } catch (err) {
      console.log(err);
    }
  };

  //   const singleShare = async (customOptions) => {
  //     try {
  //       await Share.shareSingle(customOptions);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   const singleShareWhatsApp = async (customOptions) => {
  //     try {
  //       const { isInstalled } = await Share.isPackageInstalled(
  //         'com.whatsapp.android',
  //       );

  //       if (isInstalled) {
  //         await Share.shareSingle(customOptions);
  //       } else {
  //         Alert.alert(
  //           'Whatsapp not installed',
  //           'Whatsapp not installed, please install.',
  //           [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
  //         );
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style='auto' />
        <Image
          source={{
            uri: image,
          }}
          style={{ ...styles.containerImg, ...styles.stretchImg }}
        />
        <View style={{ marginVertical: 5 }}>
          <Button
            onPress={async () => {
              await share();
            }}
            title='Share Text'
          />
        </View>
        {/* <View style={{ marginVertical: 5 }}>
          <Button
            onPress={async () => {
              await share({
                title: 'Sharing image file from awesome share app',
                message: 'Please take a look at this image',
                url: file.img,
              });
            }}
            title='Share Image'
          />
        </View> */}
        {/* <View style={{ marginVertical: 5 }}>
          <Button
            onPress={async () => {
              await share({
                title: 'Sharing pdf file from awesome share app',
                message: 'Please take a look at this file',
                url: file.pdf,
              });
            }}
            title='Share pdf'
          />
        </View> */}
      </View>
      {/* <View style={{ marginVertical: 5 }}>
        <Button
          onPress={async () => {
            await singleShareWhatsApp({
              title: 'Share via whatsapp',
              message: 'some awesome dangerous message',
              url: file.pdf,
              social: Share.Social.WHATSAPP,
              whatsAppNumber: '9945418006',
              filename: file.pdf,
            });
          }}
          title='Share to whatsapp'
        />
      </View> */}
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
