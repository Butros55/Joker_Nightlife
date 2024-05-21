import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import { useState, useContext, useEffect } from 'react';
import React from 'react'
import { Icon } from '@rneui/themed';
import { Switch } from 'react-native-gesture-handler';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../context/themeContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import firebase from './firebaseConfig';
import { setItem } from '../components/asyncStorage';
import userDataContext from '../context/userDataContext'
import Dialog from "react-native-dialog";
import { getAuth, reauthenticateWithCredential } from 'firebase/auth';
import { EmailAuthCredential } from 'firebase/auth/cordova';


const SettingButtons = ({navigation, source}) => {
  
  const auth = firebase.auth();
  const userData = useContext(userDataContext)
  const theme = useContext(themeContext)
  const [darkMode, setdarkMode] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pw, setPw] = useState('');
  const user = auth.currentUser;


  const getValue = (inputValue) => {
    if(inputValue === 'email') {
        return auth.currentUser.email
    } else if(inputValue === 'vorname') {
        return userData.vorname
    } else if(inputValue === 'nachname') {
        return userData.nachname
    } else if(inputValue === 'zweitername') {
        return userData.zweitername
    } else if(inputValue === 'email_change1') {
        return userData.email_change1
    } else if(inputValue === 'email_change2') {
        return userData.email_change2
      } else if(inputValue === 'Pw_change1') {
        return userData.Pw_change1
      } else if(inputValue === 'Pw_change2') {
        return userData.Pw_change2
    } else {
        return ''
    }
  }

  const onValueChange = (inputValue) => {
    if(inputValue === 'vorname') {
      return (text) => userData.setvorname(text)
  } else if(inputValue === 'nachname') {
      return (text) => userData.setnachname(text)
  } else if(inputValue === 'zweitername') {
      return (text) => userData.setzweitername(text)
  } else if(inputValue === 'email_change1') {
      return (text) => userData.setEmail_change1(text)
  } else if(inputValue === 'email_change2') {
      return (text) => userData.setEmail_change2(text)
  } else if(inputValue === 'Pw_change1') {
      return (text) => userData.setPw_change1(text)
  } else if(inputValue === 'Pw_change2') {
      return (text) => userData.setPw_change2(text)
  } else {
      return () => {}
  }
  }

  return (
  <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}  
      showsVerticalScrollIndicator={false}
      enableOnAndroid={true}
      scrollEnabled={true}
      extraScrollHeight={20}
      keyboardShouldPersistTaps='handled'
      scrollToOverflowEnabled={true}
      enableAutomaticScroll={true}
  >
        {source.map(({ header, items }) => {
          return (
            <View style={[styles.section, {backgroundColor: theme.background}]} key={header}>
              {header !== 'none' &&
                <Text style={styles.settingssubTitle}>{header}</Text>
              }
              {items.map(({ id, label, type, icon, icontype, color, navigate, placeholder, subText, inputValue, onPress}) => {
                return (
                <View key={id}>
                  {type === 'link' &&
                  <View>
                    <TouchableOpacity
                      key={icon}
                      onPress={() => {navigation.navigate(navigate)}}
                    >
                      <View style={[styles.row, {backgroundColor: theme.button}]}>
                        {icon !== '' &&
                          <View style={[styles.rowIcon, {backgroundColor: color}]}>
                            <Icon
                              type={icontype}
                              name={icon}
                              size={15}
                              iconStyle={{color: 'white'}}
                            />
                          </View>
                        }
                        <Text style={[styles.rowLabel, {color: theme.text}]}>{label}</Text>
                        <View style={{flex: 1}}/>
    
                          <Icon
                            type='font-awesome'
                            name='chevron-right'
                            size={10}
                            iconStyle={{color: theme.text}}
                          />
    
                      </View>
                    </TouchableOpacity>
                    </View>
                  }
                  {type === 'secure-link' &&
                  <View>
                    <TouchableOpacity
                      key={icon}
                      onPress={() => {
                        setVisible(true)
                      }}
                    >
                      <View style={[styles.row, {backgroundColor: theme.button}]}>
                        {icon !== '' &&
                          <View style={[styles.rowIcon, {backgroundColor: color}]}>
                            <Icon
                              type={icontype}
                              name={icon}
                              size={15}
                              iconStyle={{color: 'white'}}
                            />
                          </View>
                        }
                        <Text style={[styles.rowLabel, {color: theme.text}]}>{label}</Text>
                        <View style={{flex: 1}}/>
    
                          <Icon
                            type='font-awesome'
                            name='chevron-right'
                            size={10}
                            iconStyle={{color: theme.text}}
                          />
    
                      </View>
                    </TouchableOpacity>
                    <Dialog.Container visible={visible}>
                      <Dialog.Title>Sicherheitsüberprüfung</Dialog.Title>
                        <Dialog.Description>
                          Bitte geben sie erneut ihr Passwort ein.
                        </Dialog.Description>
                        <Dialog.Input
                          secureTextEntry
                          onChangeText={(text)=> {
                            setPw(text)
                          }}
                        ></Dialog.Input>
                        <Dialog.Button label="Zurück" onPress={()=> {
                          setVisible(false);
                        }} />
                        <Dialog.Button label="Weiter" onPress={()=> {
                              try{
                                const credential = EmailAuthCredential._fromEmailAndPassword(
                                  auth.currentUser.email,
                                  pw
                                );
                          
                                reauthenticateWithCredential(user, credential)
                                .then(()=> {
                                  navigation.navigate(navigate)
                                  setVisible(false)
                                }).catch((e)=> {
                                  console.log(e)
                                })
                              }catch(error) {
                                console.log(error);
                              }
                        }} />
                      </Dialog.Container>
                    </View>
                  }
                  {type === 'toggle' &&
                    <View
                      key={icon}
                    >
                      <View style={[styles.row, {backgroundColor: theme.button}]}>
                        {icon !== '' &&
                          <View style={[styles.rowIcon, {backgroundColor: color}]}>
                            <Icon
                              type={icontype}
                              name={icon}
                              size={15}
                              iconStyle={{color: 'white'}}
                            />
                          </View>
                        }
                        <Text style={[styles.rowLabel, {color: theme.text}]}>{label}</Text>
                        <View style={{flex: 1}}/>
                          <Switch 
                            value={theme.isOn}
                            onValueChange={(value) => {
                              if(onPress === 'darkmode') {
                                EventRegister.emit('ChangeTheme', value)
                                setdarkMode(value);
                                if (value == true) {
                                  setItem('darkMode', 'true');
                                } else {
                                  setItem('darkMode', 'false');
                                }
                              }
                          }}
                          />
                        
                      </View>
                    </View>
                  }
                  {type === 'input' &&
                    <View
                      key={icon}
                      onPress={() => {navigation.navigate(navigate)}}
                    >
                      
                      <View style={[styles.row, {backgroundColor: theme.button}]}>
                        {icon !== '' &&
                          <View style={[styles.rowIcon, {backgroundColor: color}]}>
                            <Icon
                              type={icontype}
                              name={icon}
                              size={15}
                              iconStyle={{color: 'white'}}
                            />
                          </View>
                        }
                        <Text style={[styles.rowLabel, {color: theme.text}]}>{label}</Text>
                      <View style={{flex: 1}}/>
                          <TextInput
                            placeholder={placeholder}
                            placeholderTextColor={theme.placeholder}
                            textAlign='left'
                            style={{width: 140, alignSelf: 'center', paddingRight: 20, color: theme.text}}
                            value={getValue(inputValue)}
                            onChangeText={onValueChange(inputValue)}
                          />
                      </View>
                    </View>
                  }
                  {subText !== '' &&
                  <View>
                    <Text style={{paddingLeft: 5, top: -10,fontWeight: 200, color: theme.text}}>{subText}</Text>
                  </View>
                  }
                </View>
                )
              })}
            </View>
          )
        })}
      </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
    profilename: {
      alignSelf: 'center',
      fontSize: 20,
      top: 35
    },
    profileadress: {
      color: 'black',
      alignSelf: 'center',
      top: 39
    },
    profilepicture: {
      width: 120,
      height: 120,
      borderRadius: 9999,
      alignSelf: 'center',
    },
    settingssubTitle: {
      color: '#9e9e9e',
      fontWeight: 300,
      paddingVertical: 12,
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: 1.1
    },
    section: {
      paddingHorizontal: 24,
      backgroundColor: 'white',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 50,
      borderRadius: 8,
      marginBottom: 12,
      paddingHorizontal: 12
    },
    rowLabel: {
      fontSize: 17,
    },
    rowLabelInput: {
      fontSize: 17,
      paddingLeft: 220,
      fontWeight: '200'
    },
    rowIcon: {
      width: 32,
      height: 32,
      borderRadius: 999,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12
    }
  })

export default SettingButtons