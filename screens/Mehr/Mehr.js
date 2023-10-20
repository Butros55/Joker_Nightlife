import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native'
import { useState, useRef, useContext } from 'react';
import React from 'react'
import { Icon } from '@rneui/themed';
import { GestureHandlerRootView, ScrollView, Switch } from 'react-native-gesture-handler';
import ITEMS from '../../Items/mehrItems';
import SettingButtons from '../../components/SettingButtons';
import themeContext from '../../context/themeContext';

const Mehr = ({navigation}) => {

  const theme = useContext(themeContext)
  const [darkMode, setdarkMode] = useState(false);


  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: theme.background}}>
      <View style={{height: 0.2, opacity: 1}} />

      <View style={{flex: .4, justifyContent: 'center', backgroundColor: theme.background}}>
          {/* back button */}
          <TouchableOpacity
            onPress={() => {[navigation.goBack()]}}
            style={{alignSelf: 'flex-start', paddingLeft: 25}}
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
            <Text style={{ fontSize: 40, fontWeight: 700, paddingLeft: 25, color: theme.text, top: 10}}>Und,</Text>
            <Text style={{ fontSize: 35, fontWeight: 300, paddingLeft: 25, color: theme.text, top: 10}}>Noch Mehr</Text>
        </View>
        <SettingButtons source={ITEMS} navigation={navigation} />
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

export default Mehr