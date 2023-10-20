import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useState, useRef, useContext } from 'react';
import React from 'react'
import { Icon } from '@rneui/themed';
import { GestureHandlerRootView, ScrollView, Switch } from 'react-native-gesture-handler';
import ITEMS from '../../Items/Settings/settingsItems';
import SettingButtons from '../../components/SettingButtons';
import themeContext from '../../context/themeContext';

const Settings = ({navigation}) => {

  const theme = useContext(themeContext)
  const [darkMode, setdarkMode] = useState(false);


  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: theme.background}}>
    <View style={{flex: 0.4, backgroundColor: theme.background}}>
      <View style={{ alignItems: 'center', top: '21%'}}>
        <Text style={{fontSize: 17, fontWeight: 500, color: theme.text}}>Einstellungen</Text>
      </View>
      <View>
        {/* back button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
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
      <TouchableOpacity
        style={[styles.profilepicture, {top: 20}]}
        //change profile picture onPress
      >
        <Image source={require('../../assets/pictures/icon.png')} style={[styles.profilepicture, {borderColor: 'white', borderWidth: 1}]} />
      </TouchableOpacity>
      <Text style={[styles.profilename, {fontWeight: 500, color: theme.text}]}>Joker Nightlife</Text>
      <Text style={[styles.profileadress, {fontWeight: 200, color: theme.text}]}>Schwarzer Weg 20, 49809 Lingen (Ems)</Text>
    </View>
      <SettingButtons source={ITEMS} navigation={navigation}/>
    <View style={{height: 0.2, opacity: 1}} />
      
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
    width: 72,
    height: 72,
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
    backgroundColor: 'white'
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
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  }
})

export default Settings