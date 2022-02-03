import React, { useState } from 'react';

import {
  Alert,
  Linking,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const MyCustomPost = () => {
  const [fbShareURL, setfbShareURL] = useState('https://reactnativecode.com');
  const [content, setContent] = useState('Hello, Welcome To our Website.');

  const publishOnFB = () => {
    let params = [];
    if (fbShareURL) params.push('u=' + encodeURI(fbShareURL));
    if (content) params.push('quote=' + encodeURI(content));
    const url =
      'https://www.facebook.com/sharer/sharer.php?' + params.join('&');

    Linking.openURL(url)
      .then((data) => {
        Alert.alert('Facebook....');
      })
      .catch(() => {
        Alert.alert('Something went wrong');
      });
  };

  return (
    <SafeAreaView style={styleSheet.MainContainer}>
      <Text style={styleSheet.text}>
        Share Post and URL From React Native App to FaceBook
      </Text>

      <Text
        style={{
          fontSize: 24,
          color: 'black',
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        Enter Post Message
      </Text>

      <TextInput
        value={content}
        onChangeText={(content) => setContent(content)}
        placeholder={'Enter Facebook Post Message'}
        style={styleSheet.textInput}
      />

      <Text
        style={{
          fontSize: 24,
          color: 'black',
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Enter URL to Share
      </Text>

      <TextInput
        value={fbShareURL}
        onChangeText={(fbShareURL) => setfbShareURL(fbShareURL)}
        placeholder={'Post URL to Share'}
        style={styleSheet.textInput}
      />

      <TouchableOpacity
        activeOpacity={0.6}
        style={styleSheet.button}
        onPress={publishOnFB}
      >
        <Text
          style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}
        >
          Share Content on Facebook
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },

  text: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textInput: {
    height: 42,
    borderColor: '#4CAF50',
    borderRadius: 7,
    borderWidth: 1,
    width: '90%',
    paddingHorizontal: 8,
  },

  button: {
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#00B8D4',
    borderRadius: 5,
    width: '80%',
  },
});

export default MyCustomPost;
