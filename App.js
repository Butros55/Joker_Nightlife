import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import joker_logo from './assets/pictures/logo.png';
import apple_button from './assets/pictures/apple_button.png';
import { Video, ResizeMode } from 'expo-av';
import React from 'react';


export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={
            require('./assets/videos/login_video.mp4')
          }
          resizeMode={ResizeMode.CONTAIN}
          isLooping={true}
          isMuted={true}
          shouldPlay={true}
          />
          <Image 
            source={joker_logo}
            style={styles.joker_logo}
            contentFit='contain'
          />
          <Image
            source={apple_button}
            style={styles.apple_button}
            contentFit='contain'
          />
          <Text style={{ fontSize: 15, position: 'absolute', color: 'white',  textAlign: 'center', top: '84%'}}>
            - or - {'\n'}{'\n'} SIGN IN WITH E-MAIL
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },

  joker_logo: {
    alignContent: 'center',
    width: '80%',
    height: '10%',
    position: 'absolute',
    top: '20%',
    tintColor: 'white'
  },

  start_screen_text: {
    fontSize: 20,
    color: 'white',
    position: 'absolute',
    top: '35%',
    textAlign: 'center'
  },

  video: {
    flex: 1,
    width: '400%',
    opacity: 0.7
  },

  apple_button: {
    alignContent: 'center',
    width: '70%',
    height: '10%',
    position: 'absolute',
    top: '75%',
  }
});
