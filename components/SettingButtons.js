import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import { useState, useContext, useEffect } from 'react';
import React from 'react'
import { Icon } from '@rneui/themed';
import { Switch } from 'react-native-gesture-handler';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../context/themeContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import firebase from './firebaseConfig';
import { getItem } from './asyncStorage';


const SettingButtons = ({navigation, source}) => {

  const auth = firebase.auth();
  const theme = useContext(themeContext)
  const [darkMode, setdarkMode] = useState(false);

  const [vorname, setvorname] = useState();
  const [nachname, setnachname] = useState();

  const getUserItems = async () => {
    let vorname = await getItem('vorname');
    let nachname = await getItem('nachname');
    setvorname(vorname)
    setnachname(nachname)
  }

  useEffect(()=>{
    getUserItems();
  },[])

  const getValue = (inputValue) => {
    if(inputValue === 'email') {
        return auth.currentUser.email
    } else if(inputValue === 'vorname') {
        return vorname
    } else if(inputValue === 'nachname') {
        return nachname
    } else {
        return ''
    }
  }
  
  return (
  <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}  
      showsVerticalScrollIndicator={false}
      style={{marginBottom:150}}
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
              {items.map(({ id, label, type, icon, icontype, color, navigate, placeholder, subText, inputValue}) => {
                return (
                <View>
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
                  {type === 'toggle' &&
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
    

                          <Switch 
                            value={theme.isOn}
                            onValueChange={(value) => {
                              EventRegister.emit('ChangeTheme', value)
                              setdarkMode(value);
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
                          />
                          <Icon
                            type='font-awesome'
                            name='chevron-right'
                            size={10}
                            iconStyle={{color: theme.text}}
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