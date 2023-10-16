import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useState, useRef } from 'react';
import React from 'react'
import { Icon } from '@rneui/themed';
import { GestureHandlerRootView, ScrollView, Switch } from 'react-native-gesture-handler';
import SETTINGITEMS from '../components/settingsItems';

const Settings = ({navigation}) => {

  const [settings, setsettings] = useState({
    darkMode: true,
    darkMode2: true
  }
  );


  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 0.3, backgroundColor: 'white'}}>
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
              />
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.profilepicture, {top: 20}]}
          //change profile picture onPress
        >
          <Image source={require('../assets/pictures/icon.png')} style={styles.profilepicture} />
        </TouchableOpacity>
        <Text style={[styles.profilename, {fontWeight: 500}]}>Joker Nightlife</Text>
        <Text style={[styles.profileadress, {fontWeight: 200}]}>Schwarzer Weg 20, 49809 Lingen (Ems)</Text>
      </View>

      <View style={{backgroundColor: 'black', height: 1, opacity: 0.1}} />

      <ScrollView style={{backgroundColor: 'white', flex: 0.7}}>
        {SETTINGITEMS.map(({ header, items }) => {
          return (
            <View style={styles.section} key={header}>
              <Text style={styles.settingssubTitle}>{header}</Text>
              {items.map(({ id, label, type, icon, color }) => {
                return (
                <TouchableOpacity
                  key={icon}
                >
                  <View style={styles.row}>
                    <View style={[styles.rowIcon, {backgroundColor: color}]}>
                      <Icon
                        type='font-awesome-5'
                        name={icon}
                        size={15}
                        iconStyle={{color: 'white'}}
                      />
                    </View>
                    <Text style={styles.rowLabel}>{label}</Text>
                    <View style={{flex: 1}}/>

                    {type === 'toggle' && 
                      <Switch 
                        value={settings[id]}
                        onValueChange={value => setsettings({ ...settings, [id]: value })}
                    />}
                    {type === 'link' &&
                      <Icon
                        type='font-awesome'
                        name='chevron-right'
                        size={10}
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
    color: 'black',
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
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12
  },
  rowLabel: {
    fontSize: 17,
    color: '#0c0c0c'
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