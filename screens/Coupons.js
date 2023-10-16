import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import themeContext from '../theme/themeContext';
import { useContext } from 'react';

const Coupons = ({navigation}) => {

  const theme = useContext(themeContext)

  return (
    <View style={{ backgroundColor: theme.background, flex: 1}}>
        <View style={{flex: .2, height: 150, justifyContent: 'flex-end', backgroundColor: theme.background}}>
            <Text style={{ fontSize: 40, fontWeight: 700, paddingLeft: 25, color: theme.text}}>Deine,</Text>
            <Text style={{ fontSize: 35, fontWeight: 300, paddingLeft: 25, color: theme.text}}>Eigene Coupons</Text>
        </View>
      <View style={{flex: .8}}>
        <Text style={{top: '40%', alignSelf: 'center', color: theme.text}}>Coupons</Text>
      </View>
    </View>
  )
}

export default Coupons