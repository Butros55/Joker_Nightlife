import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import joker_logo from './../assets/pictures/logo.png';
import { Video, ResizeMode } from 'expo-av';
import { useState , useEffect } from 'react';

//styles
import {
  StyledContainer,
  Wrapper,
  Joker_Logo_Big,
  LoginWithEmailButton,
} from '../components/styles';
import { useNavigation } from '@react-navigation/native';


const Login = () => {

  const navigation = useNavigation
  
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
          - or -
        </Text>

          <LoginWithEmailButton
            onPress={() => router.replace('SignInWithEmail') }
            >
            <Text style={{ fontSize: 15, color: 'white'}}>
              SIGN IN WITH E-MAIL
            </Text>
          </LoginWithEmailButton>
          
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
  opacity: 0.7
},
});

export default Login;