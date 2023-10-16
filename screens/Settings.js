import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useState, useRef, useContext } from 'react';
import React from 'react'
import { Icon } from '@rneui/themed';
import { GestureHandlerRootView, ScrollView, Switch } from 'react-native-gesture-handler';
import SETTINGITEMS from '../components/settingsItems';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../theme/themeContext';

const Settings = ({navigation}) => {

  const theme = useContext(themeContext)
  const [darkMode, setdarkMode] = useState(false);


  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 0.3, backgroundColor: theme.background}}>
          {/* back button */}
          <TouchableOpacity
            onPress={() => {[navigation.goBack()]}}
            style={{alignSelf: 'flex-start', paddingLeft: 30, top: 45}}
          >
            <Text style={styles.backbuttonIcon}>
              <Icon
                type='font-awesome'
                name='chevron-left'
                size={30}
                color={theme.text}
              />
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.profilepicture, {top: 20}]}
          //change profile picture onPress
        >
          <Image source={require('../assets/pictures/icon.png')} style={[styles.profilepicture, {borderColor: 'white', borderWidth: 1}]} />
        </TouchableOpacity>
        <Text style={[styles.profilename, {fontWeight: 500, color: theme.text}]}>Joker Nightlife</Text>
        <Text style={[styles.profileadress, {fontWeight: 200, color: theme.text}]}>Schwarzer Weg 20, 49809 Lingen (Ems)</Text>
      </View>

      <View style={{height: 0.2, opacity: 1}} />

      <ScrollView style={{backgroundColor: theme.background, flex: 0.7}}>
        {SETTINGITEMS.map(({ header, items }) => {
          return (
            <View style={[styles.section, {backgroundColor: theme.background}]} key={header}>
              <Text style={styles.settingssubTitle}>{header}</Text>
              {items.map(({ id, label, type, icon, color, onpress }) => {
                return (
                <TouchableOpacity
                  key={icon}
                  onPress={onpress}
                >
                  <View style={[styles.row, {backgroundColor: theme.button}]}>
                    <View style={[styles.rowIcon, {backgroundColor: color}]}>
                      <Icon
                        type='font-awesome-5'
                        name={icon}
                        size={15}
                        iconStyle={{color: 'white'}}
                      />
                    </View>
                    <Text style={[styles.rowLabel, {color: theme.text}]}>{label}</Text>
                    <View style={{flex: 1}}/>

                    {type === 'toggle' && 
                      <Switch 
                        value={theme.isOn}
                        onValueChange={(value) => {
                          EventRegister.emit('ChangeTheme', value)
                          setdarkMode(value);
                      }}
                      />}
                    {type === 'link' &&
                      <Icon
                        type='font-awesome'
                        name='chevron-right'
                        size={10}
                        iconStyle={{color: theme.text}}
                      />
                    }
                  </View>
                </TouchableOpacity>
                )
              })}
            </View>
          )
        })}
      </ScrollView>
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