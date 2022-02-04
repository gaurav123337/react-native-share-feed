import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyCustomPost from './screens/MyCustomPost';
import MyShareScreen from './screens/MyShareScreen';
import CaptureImage from './components/CaptureImage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MyCustomPost /> */}
      <MyShareScreen />
      <CaptureImage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
