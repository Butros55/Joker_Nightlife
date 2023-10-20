import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import { useState, useContext, useEffect } from 'react';
import React from 'react'
import { Icon, Button } from '@rneui/themed';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import themeContext from '../../../context/themeContext';
import SettingButtons from '../../../components/SettingButtons';
import ITEMS from '../../../Items/Settings/Profile/profileSettingsItems';
import firebase  from '../../../components/firebaseConfig';
import userDataContext from '../../../context/userDataContext';


const ProfileSettings = ({navigation}) => {
  
  const auth = firebase.auth();

  const theme = useContext(themeContext)
  const userData = useContext(userDataContext)

  const { height } = Dimensions.get("window");
  
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: theme.background}}>
    <View style={{height: height * 0.28, backgroundColor: theme.background}}>
        {/* back button */}
        <TouchableOpacity
          onPress={() => {[navigation.goBack()]}}
          style={{alignSelf: 'flex-start', paddingLeft: 30, top: 45, height: 40}}
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
      <TouchableOpacity
        style={[styles.profilepicture, {top: 10}]}
        //change profile picture onPress
      >
        <Image source={require('../../../assets/pictures/profilepicture.png')} style={[styles.profilepicture, {borderColor: 'white', borderWidth: 1}]} />
      </TouchableOpacity>
      <Text style={[styles.profilename, {fontWeight: 500, color: theme.text}]}>{userData.vorname} {userData.zweitername !== '' && <Text>{userData.zweitername} </Text>}{userData.nachname}</Text>
      <Text style={[styles.profileadress, {fontWeight: 200, color: theme.text}]}>{auth.currentUser.email}</Text>
    </View>
  
    <SettingButtons source={ITEMS} navigation={navigation}/>

        <View style={{
                position: 'absolute',
                alignSelf: 'center',
                top: height / 100 * 90
            }}>
            <Button
                type='clear'
                title={'Konto löschen'}
                titleStyle={{color: 'red', fontSize: 15}}
            />
        </View>
  </GestureHandlerRootView>
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
    paddingLeft: 180,
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

export default ProfileSettings