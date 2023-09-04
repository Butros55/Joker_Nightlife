import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import joker_logo from './../assets/pictures/logo.png';
import { Video, ResizeMode } from 'expo-av';
import { useState , useEffect } from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';

//styles
import {
  StyledContainer,
  Wrapper,
  Joker_Logo_Big,
  LoginWithEmailButton,
} from '../components/styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation();
  const video = React.useRef(null);

  return (
    <Wrapper>
      <StyledContainer>

        <Video
          ref={video}
          style={styles.video}
          source={
            require('./../assets/videos/login_video.mp4')
          }
          resizeMode={ResizeMode.CONTAIN}
          isLooping={true}
          isMuted={true}
          shouldPlay={true}
        />

        <Joker_Logo_Big
          source={joker_logo}
        />

        <Text style={{ fontSize: 15, position: 'absolute', color: 'white',  textAlign: 'center', top: '84%'}}>
          - oder -
        </Text>

          <LoginWithEmailButton
            onPress={() => navigation.navigate('SignInWithEmail') }
            >
            <Text style={{ fontSize: 15, color: 'white'}}>
              MIT EMAIL ANMELDEN
            </Text>
          </LoginWithEmailButton>




        <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
        cornerRadius={5}
        style={styles.apple_button}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            // signed in
            navigation.navigate('Home')
          } catch (e) {
            if (e.code === 'ERR_REQUEST_CANCELED') {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }
          }
        }}
      />




      </StyledContainer>
    </Wrapper>
  );
};

const styles = StyleSheet.create({

apple_button: {
  flex: 1,
  position: 'absolute',
  top: '77%',
  width: 300,
  height: 32
},

video: {
  flex: 1,
  width: '390%',
  opacity: 0.5
},
});

export default Login;