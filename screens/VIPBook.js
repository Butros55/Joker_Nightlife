import React, {useState, useContext} from 'react';
import { Icon, Button } from '@rneui/themed';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
  Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import themeContext from '../context/themeContext';
import list from '../Items/VIPBookingItems'
import {Calendar, LocaleConfig} from 'react-native-calendars';

const VIPBook = ({route, navigation}) => {

    const { item, date } = route.params;
    const theme = useContext(themeContext)

  return (
    <View style={{flex: 1}}>
      <View style={{ alignItems: 'center', top: '7.6%'}}>
        <Text style={{fontSize: 17, fontWeight: 500, color: theme.text}}>Reservierung</Text>
      </View>
      <View></View>
      {/* back button */}
      <TouchableOpacity
        onPress={() => {[navigation.goBack()]}}
        style={{alignSelf: 'flex-start', paddingLeft: 30, top: 45, height: 60, width: 60}}
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
      <View>
        <Text
          style={{fontWeight: 500, fontSize: 35, alignSelf: 'center', paddingTop: 30}}
        >
          {item.name}
        </Text>
        <Text
          style={{fontSize: 20, fontWeight: 300, alignSelf: 'center', top: '50%'}}
        >
          Reserviervdatum: {date}
        </Text>
      </View>
    </View>
  )
}

export default VIPBook

const styles = StyleSheet.create({
    button: {
      height: 45,
      borderRadius: 25
    },
    imageHome: {
      height: 220,
      width: '100%',
      borderRadius: 25,
      top: '10%'
    },
  });