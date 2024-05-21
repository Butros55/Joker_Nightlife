import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Icon, Button } from '@rneui/themed';
import ITEMS from '../../../../Items/Settings/Profile/profileSettingsEmail'
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


  const saveData = async () => {
    setloading(true);
    try {
      firebase.auth().currentUser.verifyBeforeUpdateEmail(userData.email_change1)
    } finally {
      setloading(false);
    }
  }


  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: theme.background}}>
      <View style={{ alignItems: 'center', top: '5.8%'}}>
        <Text style={{fontSize: 17, fontWeight: 500, color: theme.text}}>Email Adresse ändern</Text>
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
        <SettingButtons source={ITEMS} navigation={navigation}/>
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
          <Text style={{color: theme.text}}>Email Adresse ändern</Text>
        </Button>
      </View>
    </GestureHandlerRootView>
  )
}

export default ProfileSettingsName