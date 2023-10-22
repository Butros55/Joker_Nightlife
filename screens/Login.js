import React, { useEffect } from 'react';
import logo_source from './../assets/pictures/logo.png'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import * as AppleAuthentication from 'expo-apple-authentication';
import { Input, Icon, Button } from '@rneui/themed';
import { useState, useRef } from 'react';
import firebase from '../components/firebaseConfig';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Carousel from 'react-native-reanimated-carousel';
import RegisterList from '../Items/RegisterSwapItems'

//styles
import {
  LoginWithEmailButton,
  Panel_Up,
  InputContainer_login,
  ButtonContainer_start,
  ButtonContainer_login,
} from '../components/styles';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Login = ({navigation}) => {

//useState
const [repeatPassword, setrepeatPassword] = useState('');
const [vorname, setvorname] = useState('');
const [nachname, setnachname] = useState('');
const [zweitername, setzweitername] = useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [passwordRepeat, setpasswordRepeat] = useState('');
const [loading, setloading] = useState(false);
const [errorMsg, seterrorMsg] = useState('');
const [colormail, setcolormail] = useState('')
const [coloruser, setcoloruser] = useState('')
const [colorpas, setcolorpas] = useState('')

const [slideIndexRegister, setslideIndexRegister] = useState(0);
const [slideIndexBack, setslideIndexBack] = useState(0);
const [RegisterButtonText, setRegisterButtonText] = useState('Weiter');

const auth = firebase.auth();
const passwordRef = React.createRef();
const passwordrepeatRef = React.createRef();
const emailRef = React.createRef();
const vornameRef = React.createRef();
const zweiternameRef = React.createRef();
const nachnameRef = React.createRef();
const emailLogRef = React.createRef();
const passwordLogRef = React.createRef();

//useRefs
const LoginAndRegisterRef = useRef(null);
const LoginRef = useRef(null);
const RegisterRef = useRef(null);
const RegisterSwapRef = useRef(null);

const width = Dimensions.get('window').width;


const secureText = (type) => {
    if(type === 'secure'){
        return true
    } else {
        return false
    }
}


const getValue = (id) => {
    if(id === 'email') {
        return email
    } else if(id === 'vorname') {
        return vorname
    } else if(id === 'nachname') {
        return nachname
    } else if(id === 'password') {
        return password
    } else if(id === 'passwordrepeat') {
        return passwordRepeat
    } else if(id === 'zweitername') {
        return zweitername
    } else {
        return ''
    }
  }


const onValueChange = (id) => {
    if(id === 'vorname') {
        return (text) => {setvorname(text)}
    } else if(id === 'nachname') {
        return (text) => setnachname(text)
    } else if(id === 'zweitername') {
        return (text) => setzweitername(text)
    } else if(id === 'password') {
        return (text) => setpassword(text)
    } else if(id === 'passwordrepeat') {
        return (text) => setpasswordRepeat(text)
    } else if(id === 'email') {
        return (text) => {setemail(text)}
    } else {
      return () => {}
    }
}

const setRef = (id) => {
    if(id === 'vorname') {
        return vornameRef
    } else if(id === 'nachname') {
        return nachnameRef
    } else if(id === 'zweitername') {
        return zweiternameRef
    } else if(id === 'password') {
        return passwordRef
    } else if(id === 'passwordrepeat') {
        return passwordrepeatRef
    } else if(id === 'email') {
        return emailRef
    } else {
      return () => {}
    }
}


useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
      if(user.emailVerified) {
        navigation.navigate('Drawer')
      }
    }
  })
  return unsubscribe
}, [])

useEffect(() => {
  if(slideIndexBack === 0){
      setRegisterButtonText('Registrieren')
  } else if(slideIndexBack === 1) {
      setRegisterButtonText('Weiter')
      setloading(!auth.currentUser.emailVerified)
  } else {
      setRegisterButtonText('Starten')
  }
})

const verifyBeforeUpdateEmail = async () => {
  try {
    RegisterSwapRef.current?.next();
    await auth.currentUser.sendEmailVerification();
  }
  catch {

  }
  finally {

  }
}


const uploadData = async () => {
  const db = firebase.firestore();
  await db.collection('users').doc(auth.currentUser.uid)
  .set({
    email: auth.currentUser.email,
    vorname: vorname,
    nachname: nachname,
    zweitername: zweitername
  });
  navigation.navigate('Drawer')
}


 const handleLogin = async () => {
   setloading(true);
   resetInvalid();
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('logged in with', user.email)
    })
    .catch (e => {
      console.log(e);
      if (e.code == 'auth/invalid-email' | e.code == 'auth/wrong-password') {
        seterrorMsg('E-Mail Adresse oder Passwort falsch')
        setcolormail('red')
        setcolorpas('red')
        emailRef.current?.shake();
      }})
    .finally(() => {
      setloading(false);
    })
}


const handleSignUp = async () => {
  resetInvalid();
   auth
     .createUserWithEmailAndPassword(email, password)
     .then(async userCredentials => {
       const user = userCredentials.user;
       setslideIndexBack(slideIndexBack + 1);
       setslideIndexRegister(slideIndexRegister + 1);
       verifyBeforeUpdateEmail();
     })
     .catch(e => {
       console.log(e);
       if (e.code == 'auth/invalid-email' | e.code == 'auth/wrong-password') {
         seterrorMsg('E-Mail Adresse oder Passwort falsch')
         setcolormail('red')
         setcolorpas('red')
         emailRef.current?.shake();
       }
     })
}

const verifyUserDataRegister = () => {
    if (email == '' | password == '' | repeatPassword == '' | vorname == '') {
      if (email == '') {
        setcolormail('red')
        emailRef.current?.shake();
        emailLogRef.current?.shake();
      }
      else if ( password == '' | repeatPassword == '' | password != repeatPassword) {
        setcolorpas('red')
        passwordrepeatRef.current?.shake();
        passwordRef.current?.shake();
        passwordLogRef.current?.shake();
      }
      else if ( vorname == '') {
        setcoloruser('red')
        vornameRef.current?.shake();
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
                navigation.navigate('Drawer')
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
                onPress={() => handleLogin()}
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
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1, alignItems: 'center', alignContent: 'center' }}  
            showsVerticalScrollIndicator={false}
            enableOnAndroid={true}
            scrollEnabled={true}
            extraScrollHeight={20}
            keyboardShouldPersistTaps='handled'
            scrollToOverflowEnabled={true}
            enableAutomaticScroll={true}
        >
            {/* back button */}
            <TouchableOpacity
                  onPress={() => {
                    if(slideIndexBack === 0) {
                        RegisterRef.current?.dismiss();
                    } else {
                        RegisterSwapRef.current?.prev();
                        setslideIndexBack(slideIndexBack - 1);
                        setslideIndexRegister(slideIndexRegister - 1);  
                    }
                }}
                  style={{alignSelf: 'flex-start', paddingLeft: 30, top: 40, flex: 0.1}}
                  >
                <Text style={styles.backbuttonIcon}>
                  <Icon
                    type='font-awesome'
                    name='chevron-left'
                    size={30}
                  />
                </Text>
            </TouchableOpacity>


            <Text style={styles.errorMsgRegister}>{errorMsg}</Text>

            {/* Register Button */}
            <View style={{top :'76%', flex: 0.3}}>
              <Button
                onPress={ async () => {
                    if(slideIndexRegister === 2) {
                      uploadData();
                    } else if(slideIndexRegister === 1) {
                      console.log(auth.currentUser.emailVerified)
                    } else if(slideIndexRegister === 0) {
                      setloading(true)
                      await handleSignUp();
                      setloading(false)
                    }
                }}
                buttonStyle={styles.button}
                title={RegisterButtonText}
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
                      onPress={() => {[
                        RegisterRef.current?.dismiss(),
                        LoginRef.current?.present(),
                        resetInvalid(),
                        RegisterSwapRef.current?.prev(),
                        setslideIndexRegister(0),
                        setslideIndexBack(0),
                        setRegisterButtonText('Weiter')
                    ]}}
                    >
                      <Text style={{color: 'blue'}}>Anmelden</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>

            <Carousel
                ref={RegisterSwapRef}
                loop={false}
                width={width}
                height={height / 2}
                autoPlay={false}
                data={RegisterList}
                enabled={false}
                scrollAnimationDuration={500}
                style={{top: '-10%'}}
                mode='default'
                renderItem={({ item }) => (

                    <View style={{width: '80%', alignSelf: 'center', alignItems: 'center', flex: 1}}>
                    {item.headertype === 'image' &&
                        <View style={{height: 55}}>
                            <TouchableOpacity
                                style={[styles.profilepicture, {top: 10}]}
                                //change profile picture onPress
                            >
                                <Image source={require('../assets/pictures/profilepicture.png')} style={[styles.profilepicture, {borderColor: 'white', borderWidth: 1}]} />
                            </TouchableOpacity>
                            <Text style={{alignSelf: 'center', top: '30%', fontWeight: 300}}>Profilbild anpassen</Text>
                        </View>
                    }
                    <View style={{alignItems: 'center', top: '10%'}}>
                        <Text style={{fontSize: 40}}>{item.header}</Text>
                        <Text style={{fontSize: 15}}>{item.subheader}</Text>
                    </View>
                    {item.headertype === 'icon' &&
                      <View style={{top: '30%'}}>
                        <Icon
                          type='ionicon'
                          name='send-outline'
                          size={150}
                        />
                      </View>
                    }
                    {item.buttons.map(({id, icon, placeholder, type}) => {
                    return (
                    <View key={id} style={{width: '100%', alignSelf: 'center', alignItems: 'center', top: item.top}}>
                      <Input
                        placeholder={placeholder}
                        placeholderTextColor={coloruser}
                        inputStyle={styles.input}
                        leftIcon={{name: icon, color: coloruser}}
                        value={getValue(id)}
                        onChangeText={onValueChange(id)}
                        ref={setRef(id)}
                        secureTextEntry={secureText(type)}
                      />
                     </View>
                    )})}
                  </View>
                )}
            />

          </KeyboardAwareScrollView>
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
  backgroundColor: 'rgb(20,20,20)',
  borderRadius: 25
},

buttonOutline: {
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderColor: 'rgb(20,20,20)',
  borderWidth: 1,
},

buttonOutlineText: {
  color: 'rgb(20,20,20)',
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
},
profilepicture: {
    width: 120,
    height: 120,
    borderRadius: 9999,
    alignSelf: 'center',
  },

});

export default Login;