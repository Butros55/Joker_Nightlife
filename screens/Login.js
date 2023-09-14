import React from 'react';
import logo_source from './../assets/pictures/logo.png'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Image } from 'expo-image';
import * as AppleAuthentication from 'expo-apple-authentication';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { useNavigation } from '@react-navigation/native';
import { Input, Icon, Button } from '@rneui/themed';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { firebase_auth } from '../components/firebaseConfig';


//styles
import {
  StyledContainer,
  Wrapper,
  LoginWithEmailButton,
  Panel_Up,
  InputContainer_login,
  InputContainer_register,
  ButtonContainer_start,
  ButtonContainer_login
} from '../components/styles';
import { styled } from 'styled-components';

const Login = () => {

const [repeatPassword, setrepeatPassword] = useState('');
const [username, setusername] = useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [loading, setloading] = useState(false);
const auth = firebase_auth;

 const handleLogin = async () => {
  setloading(true);
  try {
    if (password == repeatPassword) {
      const response = await signInWithEmailAndPassword(auth, email, password);
    }else{
    }
  }catch (error){
    console.log(error);
  }finally{
    setloading(false);
  }
}

const handleSignUp = async () => {
  setloading(true);
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
  }catch (error){
    console.log(error);
  }finally{
    setloading(false);
  }
}


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

        {/* Joker Logo white */}
        <Image
          source={logo_source}
          style={styles.joker_logo_white}
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
          <Panel_Up 
            style={{borderRadius: 25}}
          >
            <View style={styles.line}></View>
                <Text style={{ textAlign: 'center', fontSize: 25, top: '5%'}}>Anmeldung mit E-Mail</Text>


              <ButtonContainer_start>
                {/* Login Button */}
                <Button
                  onPress={() => {[this._loginPanel.show()]}}
                  buttonStyle={styles.button}
                  title='Anmelden'
                  containerStyle={{paddingBottom: 10}}
                >
                </Button>

                {/* Register Button */}
                <Button
                  onPress={() => {this._registerPanel.show()}}
                  buttonStyle={[styles.button, styles.buttonOutline]}
                  title='Registrieren'
                  titleStyle={styles.buttonOutlineText}
                >
                </Button>
            </ButtonContainer_start>
          </Panel_Up>
        </SlidingUpPanel>


        {/* Login Slide Panel */}
        <SlidingUpPanel
          ref={c => (this._loginPanel = c)}
          animatedValue={this.loginPanelValue}
          friction={0.8}
          allowDragging={false}
          draggableRange={{top:height, bottom:0}}
          height={height + 20}
        >
          <Panel_Up 
            style={{borderRadius: 25}}
            behavior={Platform.OS === 'ios' ? 'padding' : "height"}
          >

            {/* back button */}
            <TouchableOpacity
                  onPress={() => {[this._loginPanel.hide()]}}
                  style={{alignSelf: 'flex-start', paddingLeft: 30, top: 40}}
                  >
                <Text style={styles.backbuttonIcon}>
                  <Icon
                    type='font-awesome'
                    name='chevron-left'
                    size={30}
                  />
                </Text>
            </TouchableOpacity>

            <Text style={{fontSize: 40, top: 130}}>Wilkommen zurück</Text>
            <Text style={{fontSize: 15, top: 140}}>Melde dich mit deinem Konto an</Text>

            {/* Login Button */}
            <ButtonContainer_login>
              <Button
                onPress={() => {handleLogin()}}
                buttonStyle={styles.button}
                title='Anmelden'
                loading={loading}
                loadingProps={{
                  size: 'small',
                  color: 'white',
                }}
                >
              </Button>

              <View style={{flexDirection: 'row', padding: '3.5%', justifyContent: 'center'}}>
                <View></View>
                  <Text>Du hast noch kein Konto?</Text>
                <View/>
                <View style={{paddingLeft: '5%'}}>
                    <TouchableOpacity
                      onPress={() => {[this._loginPanel.hide(), this._registerPanel.show()]}}
                    >
                      <Text style={{color: 'blue'}}>Registrieren</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </ButtonContainer_login>

            {/* User Inputs for Login */}
            <InputContainer_login>
              <Input
                placeholder='Email'
                inputStyle={styles.input}
                leftIcon={{name: 'mail-outline'}}
                value={email}
                onChangeText={(text) => setemail(text)}
              />
              <Input 
                placeholder='Passwort'
                inputStyle={styles.input}
                secureTextEntry
                leftIcon={{name: 'lock-outline'}}
                value={password}
                onChangeText={(text) => setpassword(text)}
              />
              {/* forgot password button */}
              <TouchableOpacity
                /* onPress={{  }} */
              >
                <Text style={{alignSelf: 'flex-end', paddingRight: 10, color: 'blue'}}>Passwort vergessen?</Text>
              </TouchableOpacity>

            </InputContainer_login>
          </Panel_Up>
        </SlidingUpPanel>


        {/* Register Slide Panel */}
        <SlidingUpPanel
          ref={c => (this._registerPanel = c)}
          animatedValue={this.registerPanelValue}
          friction={0.8}
          allowDragging={false}
          draggableRange={{top:height, bottom:0}}
          height={height + 20}
        >
          <Panel_Up 
            style={{borderRadius: 25}}
            behavior={Platform.OS === 'ios' ? 'height' : "height"}
          >
            {/* back button */}
            <TouchableOpacity
                  onPress={() => {[this._registerPanel.hide()]}}
                  style={{alignSelf: 'flex-start', paddingLeft: 30, top: 40}}
                  >
                <Text style={styles.backbuttonIcon}>
                  <Icon
                    type='font-awesome'
                    name='chevron-left'
                    size={30}
                  />
                </Text>
            </TouchableOpacity>

            <Text style={{fontSize: 40, top: 130}}>Registrieren</Text>
            <Text style={{fontSize: 15, top: 140}}>Erstelle dein eigenes Konto</Text>

            {/* Register Button */}
            <ButtonContainer_login>
              <Button
                onPress={() => {handleSignUp()}}
                buttonStyle={styles.button}
                title='Registrieren'
                loading={false}
                loadingProps={{
                  size: 'small',
                  color: 'white',
                }}
                >
              </Button>

              <View style={{flexDirection: 'row', padding: '3.5%', justifyContent: 'center'}}>
                <View></View>
                  <Text>Du hast bereits ein Konto?</Text>
                <View/>
                <View style={{paddingLeft: '5%'}}>
                    <TouchableOpacity
                      onPress={() => {[this._loginPanel.show(), this._registerPanel.hide()]}}
                    >
                      <Text style={{color: 'blue'}}>Anmelden</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </ButtonContainer_login>

            {/* User Inputs for Login */}
            <InputContainer_register>
              <Input 
                placeholder='Benutzername'
                inputStyle={styles.input}
                leftIcon={{name: 'person-outline'}}
                value={username}
                onChangeText={(text) => setusername(text)}
              />
              <Input
                placeholder='Email'
                inputStyle={styles.input}
                leftIcon={{name: 'mail-outline'}}
                value={email}
                onChangeText={(text) => setemail(text)}
              />
              <Input 
                placeholder='Passwort'
                inputStyle={styles.input}
                secureTextEntry
                leftIcon={{name: 'lock-outline'}}
                value={password}
                onChangeText={(text) => setpassword(text)}
              />
              <Input 
                placeholder='Passwort bestätigen'
                inputStyle={styles.input}
                secureTextEntry
                leftIcon={{name: 'lock-outline'}}
                value={repeatPassword}
                onChangeText={(text) => setrepeatPassword(text)}
              />
            </InputContainer_register>
          </Panel_Up>
        </SlidingUpPanel>
            

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
  width: '120%',
  opacity: 0.6
},

input: {
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: 25,
  margin: 4,
  paddingLeft: 10,
  fontSize: 20,
},

button: {
  height: 45,
  backgroundColor: 'rgba(0, 48, 135, 1)',
  borderRadius: 25
},

buttonOutline: {
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderColor: 'rgb(0, 48, 135)',
  borderWidth: 1,
},

buttonOutlineText: {
  color: 'rgb(0, 48, 135)',
  height: 22
},

line: {
  top: 5,
  backgroundColor: 'rgba(60, 60, 60, 1)',
  width: 75,
  height: 5,
  borderRadius: 20
},

backbuttonIcon: {
  color: 'rgb(0, 0, 0)',
  height: 30,
},

joker_logo_white: {
  alignContent: 'center',
  width: '80%',
  height: '10%',
  position: 'absolute',
  top: '15%',
  tintColor: 'white'
},

joker_logo_black: {
  alignContent: 'center',
  width: '80%',
  height: '10%',
  position: 'absolute',
  top: '15%',
  tintColor: 'black'
}

});

export default Login;