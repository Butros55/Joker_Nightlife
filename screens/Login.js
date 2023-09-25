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
import { useState, useRef } from 'react';
import { firebase_auth } from '../components/firebaseConfig';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

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
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FirebaseError } from 'firebase/app';

const Login = () => {

//useStates
const [repeatPassword, setrepeatPassword] = useState('');
const [username, setusername] = useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [loading, setloading] = useState(false);
const [errorMsg, seterrorMsg] = useState('');
const [colormail, setcolormail] = useState('')
const [coloruser, setcoloruser] = useState('')
const [colorpas, setcolorpas] = useState('')

const auth = firebase_auth;
const passwordRef = React.createRef();
const passwordrepeatRef = React.createRef();
const emailRef = React.createRef();
const userRef = React.createRef();
const emailLogRef = React.createRef();
const passwordLogRef = React.createRef();

//useRefs
const LoginAndRegisterRef = useRef(null);
const LoginRef = useRef(null);
const RegisterRef = useRef(null);



 const handleLogin = async () => {
   setloading(true);
   resetInvalid();
   verifyUserDataLogin();
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    navigation.navigate('Home');
  }catch (e){
    console.log(e);
    if (e.code == 'auth/invalid-email' | e.code == 'auth/wrong-password') {
      seterrorMsg('E-Mail Adresse oder Passwort falsch')
      setcolormail('red')
      setcolorpas('red')
      emailRef.current?.shake();
    }
  }finally{
    setloading(false);
  }
}

const handleSignUp = async () => {
  setloading(true);
  resetInvalid();
  verifyUserDataRegister();
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
  }catch (e) {
    console.log(e.code);
    if (e.code == 'auth/email-already-in-use') {
      seterrorMsg('Diese E-Mail wird bereits verwendet')
      setcolormail('red')
      emailRef.current?.shake();
    } else if (e.code == 'auth/weak-password') {
      seterrorMsg('Das Passwort muss mindestens 6 Zeichen enthalten')
      setcolorpas('red')
    }
  }finally{
    setloading(false);
  }
}

const verifyUserDataRegister = () => {
    if (email == '' | password == '' | repeatPassword == '' | username == '') {
      if (email == '') {
        setcolormail('red')
        emailRef.current?.shake();
        emailLogRef.current?.shake();
      }
      if ( password == '' | repeatPassword == '' | password != repeatPassword) {
        setcolorpas('red')
        passwordrepeatRef.current?.shake();
        passwordRef.current?.shake();
        passwordLogRef.current?.shake();
      }
      if ( username == '') {
        setcoloruser('red')
        userRef.current?.shake();
      }
      seterrorMsg('Bitte Füllen Sie die roten Felder aus')
    } else if (password != repeatPassword) {
      passwordrepeatRef.current?.shake();
      passwordRef.current?.shake();
      setcolorpas('red')
      seterrorMsg('Die beiden Passwörter müssen übereinstimmen')
    }
}

const verifyUserDataLogin = () => {
  if (email == '' | password == '') {
    if (email == '') {
      setcolormail('red')
      emailRef.current?.shake();
      emailLogRef.current?.shake();
    }
    if ( password == '') {
      setcolorpas('red')
      passwordrepeatRef.current?.shake();
      passwordRef.current?.shake();
      passwordLogRef.current?.shake();
    }
    seterrorMsg('Bitte Füllen Sie die roten Felder aus')
  }
}


const resetInvalid = () => {
  seterrorMsg('');
  setcolormail('')
  setcolorpas('')
  setcoloruser('')
}


  const navigation = useNavigation();
  const video = React.useRef(null);

  const { height } = Dimensions.get("window");


  return (
    <GestureHandlerRootView style={{ flex: 1, alignItems: 'center', backgroundColor: 'rgba(0,0,0,1)'}}>
      <BottomSheetModalProvider>


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
            onPress={() => [LoginAndRegisterRef.current?.present(), resetInvalid()] }
            >
            <Text style={{ fontSize: 15, color: 'white'}}>
              MIT EMAIL ANMELDEN
            </Text>
        </LoginWithEmailButton>
        

        {/* Login and Register Slide Panel */}
        <BottomSheetModal
          ref={LoginAndRegisterRef}
          index={0}
          snapPoints={['30%']}
          handleIndicatorStyle={ styles.line }
        >
          <Panel_Up 
            style={{borderRadius: 25}}
          >
                <Text style={{ textAlign: 'center', fontSize: 25, top: '5%'}}>Anmeldung mit E-Mail</Text>


              <ButtonContainer_start>
                {/* Login Button */}
                <Button
                  onPress={() => { [LoginAndRegisterRef.current?.dismiss(), LoginRef.current?.present()] }}
                  buttonStyle={styles.button}
                  title='Anmelden'
                  containerStyle={{paddingBottom: 10}}
                >
                </Button>

                {/* Register Button */}
                <Button
                  onPress={() => {[LoginAndRegisterRef.current?.dismiss(), RegisterRef.current?.present()]}}
                  buttonStyle={[styles.button, styles.buttonOutline]}
                  title='Registrieren'
                  titleStyle={styles.buttonOutlineText}
                >
                </Button>
            </ButtonContainer_start>
          </Panel_Up>
        </BottomSheetModal>


        {/* Login Slide Panel */}
        <BottomSheetModal
          ref={LoginRef}
          index={0}
          snapPoints={['100%']}
          enableContentPanningGesture={false}
          enableHandlePanningGesture={false}
          handleIndicatorStyle={{ display: "none" }}
        >
          <Panel_Up 
            style={{borderRadius: 25}}
            behavior={Platform.OS === 'ios' ? 'padding' : "height"}
          >

          <Text style={styles.errorMsgLogin}>{errorMsg}</Text>

            {/* back button */}
            <TouchableOpacity
                  onPress={() => {[LoginRef.current?.dismiss(), resetInvalid()]}}
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
                      onPress={() => {[LoginRef.current?.dismiss(), RegisterRef.current?.present(), resetInvalid()]}}
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
                placeholderTextColor={colormail}
                inputStyle={styles.input}
                leftIcon={{name: 'mail-outline', color: colormail}}
                value={email}
                onChangeText={(text) => setemail(text)}
                ref={emailLogRef}
              />
              <Input 
                placeholder='Passwort'
                placeholderTextColor={colorpas}
                inputStyle={styles.input}
                secureTextEntry
                leftIcon={{name: 'lock-outline', color: colorpas}}
                value={password}
                onChangeText={(text) => setpassword(text)}
                ref={passwordLogRef}
              />
              {/* forgot password button */}
              <TouchableOpacity
                /* onPress={{  }} */
              >
                <Text style={{alignSelf: 'flex-end', paddingRight: 10, color: 'blue'}}>Passwort vergessen?</Text>
              </TouchableOpacity>

            </InputContainer_login>
          </Panel_Up>
        </BottomSheetModal>


        {/* Register Slide Panel */}
        <BottomSheetModal
            ref={RegisterRef}
            index={0}
            snapPoints={['100%']}
            enableContentPanningGesture={false}
            enableHandlePanningGesture={false}
            handleIndicatorStyle={{ display: "none" }}
        >
          <Panel_Up 
            style={{borderRadius: 25}}
            behavior={Platform.OS === 'ios' ? 'height' : "height"}
          >
            {/* back button */}
            <TouchableOpacity
                  onPress={() => {RegisterRef.current?.dismiss()}}
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

            <Text style={styles.errorMsgRegister}>{errorMsg}</Text>

            {/* Register Button */}
            <ButtonContainer_login>
              <Button
                onPress={() => {handleSignUp()}}
                buttonStyle={styles.button}
                title='Registrieren'
                loading={loading}
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
                      onPress={() => {[RegisterRef.current?.dismiss(), LoginRef.current?.present(), resetInvalid()]}}
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
                placeholderTextColor={coloruser}
                inputStyle={styles.input}
                leftIcon={{name: 'person-outline', color: coloruser}}
                value={username}
                onChangeText={(text) => setusername(text)}
                ref={userRef}
              />
              <Input
                placeholder='Email'
                placeholderTextColor={colormail}
                inputStyle={styles.input}
                leftIcon={{name: 'mail-outline', color: colormail}}
                value={email}
                onChangeText={(text) => setemail(text)}
                ref={emailRef}
              />
              <Input 
                placeholder='Passwort'
                placeholderTextColor={colorpas}
                inputStyle={styles.input}
                secureTextEntry
                leftIcon={{name: 'lock-outline', color: colorpas}}
                value={password}
                onChangeText={(text) => setpassword(text)}
                ref={passwordRef}
              />
              <Input 
                placeholder='Passwort bestätigen'
                placeholderTextColor={colorpas}
                inputStyle={styles.input}
                secureTextEntry
                leftIcon={{name: 'lock-outline', color: colorpas}}
                value={repeatPassword}
                onChangeText={(text) => setrepeatPassword(text)}
                ref={passwordrepeatRef}
              />
            </InputContainer_register>
          </Panel_Up>
        </BottomSheetModal>
            

      </BottomSheetModalProvider>
    </GestureHandlerRootView>
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
  width: '130%',
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
},

errorMsgRegister: {
  top: '63%',
  color: 'red'
},

errorMsgLogin: {
  top: '63%',
  color: 'red'
}

});

export default Login;