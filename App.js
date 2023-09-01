import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import joker_logo from './assets/pictures/logo.png';
import apple_button from './assets/pictures/apple_button.png';
import { Video, ResizeMode } from 'expo-av';
import { useState , useEffect } from 'react';
import React from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  //check if Apple login is available
  const [isAppleLoginAvailable, setIsAppleLoginAvailable] = useState(false);

  useEffect(() => {
      AppleAuthentication.isAvailableAsync().then(setIsAppleLoginAvailable);
  }, []);

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

          
          {isAppleLoginAvailable && (
            <AppleAuthentication.AppleAuthenticationButton
              buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
              buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
              cornerRadius={5}
              style={styles.button}
              onPress={async () => {
                try {
                  const credential = await AppleAuthentication.signInAsync({
                    requestedScopes: [
                      AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                      AppleAuthentication.AppleAuthenticationScope.EMAIL,
                    ],
                  });
                  // signed in
                } catch (e) {
                  if (e.code === 'ERR_REQUEST_CANCELED') {
                    // handle that the user canceled the sign-in flow
                  } else {
                    // handle other errors
                  }
                }
              }}
            />
          )}


          <Image 
            source={joker_logo}
            style={styles.joker_logo}
            contentFit='contain'
          />

          <Text style={{ fontSize: 15, position: 'absolute', color: 'white',  textAlign: 'center', top: '84%'}}>
            - or -
          </Text>

          <Text style={{ fontSize: 15, position: 'absolute', color: 'white',  textAlign: 'center', top: '88%'}}>
            SIGN IN WITH E-MAIL
          </Text>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  button: {
    flex: 1,
    position: 'absolute',
    top: '77%',
    width: 300,
    height: 32
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
    width: '390%',
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
