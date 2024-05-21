import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Icon, Button } from '@rneui/themed';
import ITEMS from '../../../../Items/Settings/Profile/profileSettingsPwÄndernItems'
import SettingButtons from '../../../../components/SettingButtons'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import themeContext from '../../../../context/themeContext';
import { useContext, useState } from 'react';
import userDataContext from '../../../../context/userDataContext'
import firebase from '../../../../components/firebaseConfig';


const ProfileSettingsName = ({navigation}) => {
  
  const userData = useContext(userDataContext)
  const theme = useContext(themeContext)
  const [changed, setchanged] = useState(false);
  const [loading, setloading] = useState(false);
  const auth = firebase.auth()


  const saveData = async () => {
    setloading(true);
    try {
      auth.sendPasswordResetEmail(auth.currentUser.email)
    } catch(e) {
      console.log(e)
      setloading(false);
    }
  }


  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: theme.background}}>
      <View style={{ alignItems: 'center', top: '5.8%'}}>
        <Text style={{fontSize: 17, fontWeight: 500, color: theme.text}}>Passwort ändern</Text>
      </View>
      <View>
        {/* back button */}
        <TouchableOpacity
          onPress={()=> {navigation.goBack()}}
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
      <View>
        <Text style={{flex: 1, textAlign: 'center', color: theme.text, padding: 50}}>
Sie erhalten nach drücken des unteren Buttons eine E-Mail, um ihr Passwort zurück zu setzen.
        </Text>

      </View>
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
          <Text style={{color: theme.text}}>Passwort zurücksetzen</Text>
        </Button>
      </View>
    </GestureHandlerRootView>
  )
}

export default ProfileSettingsName