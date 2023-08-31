import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import image from './assets/logo.png';
import { Video, ResizeMode } from 'expo-av';
import React from 'react';
import Dosis from './assets/fonts/Dosis.ttf'


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
            source={image}
            style={styles.image}
            contentFit='contain'
          />
          <Text style={styles.start_screen_text}>Wilkommen bei der Joker Nightlife App {'\n'}
            Melde dich an und erhalte Vorteile wie {'\n'}
            Gutscheine, News, Events uvm.
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

  image: {
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
  }
});
