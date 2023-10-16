import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import themeContext from '../theme/themeContext';
import { useContext } from 'react'

const Coupons = ({navigation}) => {
  
  const theme = useContext(themeContext)

  return (
    <View style={{ alignItems: 'center', backgroundColor: theme.background, flex: 1}}>
      <Text style={{top: '50%', color: theme.text}}>Aktuell sind keine Coupons verfügbar</Text>
    </View>
  )
}

export default Coupons