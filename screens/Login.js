import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions, Animated } from 'react-native';
import joker_logo from './../assets/pictures/logo.png';
import { Video, ResizeMode } from 'expo-av';
import { useState , useEffect } from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';
import SlidingUpPanel from 'rn-sliding-up-panel';

//styles
import {
  StyledContainer,
  Wrapper,
  Joker_Logo_Big,
  LoginWithEmailButton,
  Panel_Up,
  InputContainer_login,
  ButtonContainer_start,
  ButtonContainer_login

} from '../components/styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation();
  const video = React.useRef(null);

  const { height } = Dimensions.get("window");

  panelValue = new Animated.Value(0);
  loginPanelValue = new Animated.Value(0);

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

        <Text style={{ fontSize: 15, position: 'absolute', color: 'white',  textAlign: 'center', top: '84%'}}>
          - oder -
        </Text>

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

        <LoginWithEmailButton
            onPress={() => this._panel.show() }
            >
            <Text style={{ fontSize: 15, color: 'white'}}>
              MIT EMAIL ANMELDEN
            </Text>
        </LoginWithEmailButton>
        
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={{ top: height * 0.35, bottom: 0 }}
          animatedValue={this.panelValue}
          snappingPoints={[height * 0.35]}
          friction={0.7}
        >
          <Panel_Up style={{borderRadius: 25}}>
            <View style={styles.line}></View>
              <ButtonContainer_start>

                <Text style={{ color: 'black', textAlign: 'center'}}>Anmeldung mit E-Mail</Text>
                <TouchableOpacity
                  onPress={() => {[this._loginPanel.show()]}}
                  style={styles.button}
                >
                <Text style={styles.buttonText}>Anmelden</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {  }}
                  style={[styles.button, styles.buttonOutline]}
                >
                  <Text style={styles.buttonOutlineText}>Registrieren</Text>
                </TouchableOpacity>

            </ButtonContainer_start>
          </Panel_Up>
        </SlidingUpPanel>

        <SlidingUpPanel
          ref={c => (this._loginPanel = c)}
          draggableRange={{ top: height, bottom: 0 }}
          animatedValue={this.loginPanelValue}
          snappingPoints={[height]}
          friction={0.7}
          allowDragging={false}
        >
          <Panel_Up style={{borderRadius: 25}}>
            <ButtonContainer_login>
              <TouchableOpacity
                    onPress={() => {[this._panel.show(), this._loginPanel.hide()]}}
                    >
                  <Text style={styles.backbuttonText}>zurück</Text>
              </TouchableOpacity>
            </ButtonContainer_login>
          </Panel_Up>
        </SlidingUpPanel>

        <Joker_Logo_Big
          source={joker_logo}
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
  opacity: 0.6
},

input: {
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  height: 40,
  borderRadius: 32,
  margin: 4,
  paddingLeft: 10,
  fontSize: 20,
},

buttonText: {
  color: 'white',
},

button: {
  width: '100%',
  height: 45,
  backgroundColor: 'rgba(0, 48, 135, 0.7)',
  alignItems: 'center',
  padding: 15,
  borderRadius: 32,
  margin: 4
},

buttonOutline: {
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  borderColor: 'rgb(0, 48, 135)',
  borderWidth: 1,
},

buttonOutlineText: {
  color: 'rgb(0, 48, 135)',
  height: 20
},

line: {
  top: 5,
  backgroundColor: 'rgba(60, 60, 60, 1)',
  width: 75,
  height: 5,
  borderRadius: 20
},

backbuttonText: {
  color: 'rgb(0, 0, 0)',
  height: 20
},

});

export default Login;