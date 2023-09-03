import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import joker_logo from './../assets/pictures/logo.png';
import { Video, ResizeMode } from 'expo-av';
import { useState , useEffect } from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';
import { router } from 'expo-router';

//styles
import {
  Colors,
  StyledContainer,
  Wrapper,
  Joker_Logo_Big,
} from '../components/styles';
import jwtDecode from 'jwt-decode';


const Login = () => {
  
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [userToken, setUserToken] = useState();
  
  //check if Apple login is available
  const [isAppleLoginAvailable, setIsAppleLoginAvailable] = useState(false);

  useEffect(() => {
    const checkAvailable = async () => {
      const isAvailable = await AppleAuthentication.isAvailableAsync();
      setIsAppleLoginAvailable(isAvailable);
    }
    checkAvailable();
  }, []);

  const login = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      // signed in
      console.log(credential);
      setUserToken(credential);

    } catch (e) {
      if (e.code === 'ERR_REQUEST_CANCELED') {
        // handle that the user canceled the sign-in flow
      } else {
        // handle other errors
      }
    }
  };

  const getAppleAuthContent = () => {
    if (!userToken) {
        return <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
          cornerRadius={5}
          style={styles.apple_button}
          onPress={login}
          />
    }
      else {
        //logged in
        const decoded = jwtDecode(userToken.identityToken);
        const current_date = Date.now() / 1000;


        //übergang zu Home geht noch nicht


      }
    };
  

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

        <Text style={{ fontSize: 15, position: 'absolute', color: 'white',  textAlign: 'center', top: '88%'}}>
          SIGN IN WITH E-MAIL
        </Text>

        {
          isAppleLoginAvailable
            ? getAppleAuthContent()
            : <Text>Apple auth unavailable</Text>
        }

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