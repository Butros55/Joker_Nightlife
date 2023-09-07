import React from 'react';
import logo_source from './../files/pictures/logo.png'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Image } from 'expo-image';
import { useState } from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { useNavigation } from '@react-navigation/native';

//styles
import {
  StyledContainer,
  Wrapper,
  LoginWithEmailButton,
  Panel_Up,
  InputContainer,
  ButtonContainer_start,
  ButtonContainer_login
} from '../components/styles';

const Login = () => {


  const navigation = useNavigation();
  const video = React.useRef(null);

  const { height } = Dimensions.get("window");

  panelValue = new Animated.Value(0);
  loginPanelValue = new Animated.Value(0);
  registerPanelValue = new Animated.Value(0);


  return (
    <Wrapper>
      <StyledContainer>


        {/* Joker background Logo as a Video */}
        <Video
          ref={video}
          style={styles.video}
          source={
            require('./../files/videos/login_video.mp4')
          }
          resizeMode={ResizeMode.CONTAIN}
          isLooping={true}
          isMuted={true}
          shouldPlay={true}
        />

        <Text style={{ fontSize: 15, position: 'absolute', color: 'white',  textAlign: 'center', top: '84%'}}>
          - oder -
        </Text>
          

          {/* Apple Sign in on start site */}
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

        {/* Login with Email Button on Start site */}
        <LoginWithEmailButton
            onPress={() => this._panel.show() }
            >
            <Text style={{ fontSize: 15, color: 'white'}}>
              MIT EMAIL ANMELDEN
            </Text>
        </LoginWithEmailButton>
        

        {/* Login and Register Slide Panel */}
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

                {/* Login Button */}
                <TouchableOpacity
                  onPress={() => {[this._loginPanel.show(), this._panel.hide()]}}
                  style={styles.button}
                >
                <Text style={styles.buttonText}>Anmelden</Text>
                </TouchableOpacity>

                {/* Register Button */}
                <TouchableOpacity
                  onPress={() => {this._registerPanel.show(), this._panel.hide()}}
                  style={[styles.button, styles.buttonOutline]}
                >
                  <Text style={styles.buttonOutlineText}>Registrieren</Text>
                </TouchableOpacity>

            </ButtonContainer_start>
          </Panel_Up>
        </SlidingUpPanel>


        {/* Login Slide Panel */}
        <SlidingUpPanel
          ref={c => (this._loginPanel = c)}
          animatedValue={this.loginPanelValue}
          friction={0.5}
          allowDragging={false}
        >
          <Panel_Up style={{borderRadius: 25}}>
            <ButtonContainer_login>
              <TouchableOpacity
                    onPress={() => {[this._panel.show(), this._loginPanel.hide()]}}
                    >
                  <Text style={styles.backbuttonText}>zurück</Text>
                  {/* User Inputs for Login */}
                  <InputContainer>
                    <TextInput
                      placeholder='Email oder Handynummer'
                      style={styles.input}
                    />
                    <TextInput 
                      placeholder='Password'
                      style={styles.input}
                      secureTextEntry
                    />
                  </InputContainer>
              </TouchableOpacity>
            </ButtonContainer_login>
          </Panel_Up>
        </SlidingUpPanel>


        {/* Register Slide Panel */}
        <SlidingUpPanel
          ref={c => (this._registerPanel = c)}
          animatedValue={this.registerPanelValue}
          friction={0.5}
          allowDragging={false}
        >
          <Panel_Up style={{borderRadius: 25}}>
            {/* Joker Logo white */}
            <Image
              source={logo_source}
              style={styles.joker_logo_black}
            />
            <ButtonContainer_login>
              <TouchableOpacity
                    onPress={() => {[this._panel.show(), this._registerPanel.hide()]}}
                    >
                  <Text style={styles.backbuttonText}>zurück</Text>
              </TouchableOpacity>
            </ButtonContainer_login>
          </Panel_Up>
        </SlidingUpPanel>
            
        {/* Joker Logo white */}
        <Image
          source={logo_source}
          style={styles.joker_logo_white}
        />

      </StyledContainer>
    </Wrapper>
  );
};


{/* All intern Styles */}
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
  height: 20,
  textAlign: 'center'
},

joker_logo_white: {
  alignContent: 'center',
  width: '80%',
  height: '10%',
  position: 'absolute',
  top: '15%',
  tintColor: 'white'
},

joker_logo: {
  alignContent: 'center',
  width: '80%',
  height: '10%',
  position: 'absolute',
  top: '15%',
  tintColor: 'black'
}

});

export default Login;