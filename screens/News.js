import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import themeContext from '../context/themeContext';
import { useContext } from 'react';

const News = ({navigation}) => {

  const theme = useContext(themeContext)

  return (
    <View style={{ backgroundColor: theme.background, flex: 1}}>
        <View style={{flex: .2, height: 150, justifyContent: 'flex-end', backgroundColor: theme.background}}>
            <Text style={{ fontSize: 40, fontWeight: 700, paddingLeft: 25, color: theme.text}}>Neuste,</Text>
            <Text style={{ fontSize: 35, fontWeight: 300, paddingLeft: 25, color: theme.text}}>News</Text>
        </View>
      <View style={{flex: .8}}>
        <Text style={{top: '40%', alignSelf: 'center', color: theme.text}}>News</Text>
      </View>
    </View>
  )
}
export default News