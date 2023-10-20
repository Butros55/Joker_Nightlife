import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Icon, Button } from '@rneui/themed';
import ITEMS from '../../../../Items/Settings/Profile/profileSettingsNameItems'
import SettingButtons from '../../../../components/SettingButtons'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import themeContext from '../../../../context/themeContext';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import userDataContext from '../../../../context/userDataContext'
import { Alert } from 'react-native'


const ProfileSettingsName = ({navigation}) => {
  
  const userData = useContext(userDataContext)
  const theme = useContext(themeContext)
  const [changed, setchanged] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    checkSettingsChange();
    console.log(userData.zweitername)
  })

  const goBackOnSave = async () => {
    if(changed) {
      Alert.alert(
        'Ups...',
        'Sie haben ihre änderungen nicht gespeichert. Möchten sie ohne speichern fortfahren?',
        [
          {
            text: 'Abbrechen',
            onPress: () => {

            },
            style: 'default',
          },
          {
            text: 'Weiter',
            onPress: async () => {
              await userData.setvorname(userData.checkvorname)
              await userData.setnachname(userData.checknachname)
              await userData.setzweitername(userData.checkzweitername)
              navigation.goBack()},
            style: 'destructive',
          }
        ],
      )
    } else {
      navigation.goBack()
    }
  }

  const saveData = async () => {
    setloading(true);
    try {
      await userData.setcheckvorname(userData.vorname)
      await userData.setchecknachname(userData.nachname)
      await userData.setcheckzweitername(userData.zweitername)
    } finally {
      setloading(false);
    }
  }

  const checkSettingsChange = async () => {
    if(userData.checkvorname !== userData.vorname ||
      userData.checknachname !== userData.nachname ||
      userData. checkzweitername !== userData.zweitername) {
      setchanged(true)
    } else {
      setchanged(false)
    }
  } 

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: theme.background}}>
      <View style={{ alignItems: 'center', top: '5.8%'}}>
        <Text style={{fontSize: 17, fontWeight: 500, color: theme.text}}>Name, E-Mail, Handynummer</Text>
      </View>
      <View>
        {/* back button */}
        <TouchableOpacity
          onPress={goBackOnSave}
          style={{alignSelf: 'flex-start', paddingLeft: 30, top: 30, height: 60, width: 60}}
        >
          <Text>
            <Icon
              type='font-awesome'
              name='chevron-left'
              size={30}
              color={theme.text}
            />
          </Text>
      </TouchableOpacity>
      </View>
      <View style={{flex: 0.84}}>
        <SettingButtons source={ITEMS} navigation={navigation}/>
        {changed === true &&
        <Button 
          onPress={saveData}
          loading={loading}
          buttonStyle={{
            backgroundColor: theme.submitButton,
            borderRadius: 25,
            height: 50,
            width: 300,
            alignSelf: 'center',
          }}
        >
          <Text style={{color: theme.text}}>Speichern</Text>
        </Button>
        }
      </View>
    </GestureHandlerRootView>
  )
}

export default ProfileSettingsName