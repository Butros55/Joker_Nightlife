import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import themeContext from '../theme/themeContext';
import { useContext } from 'react'
const News = ({navigation}) => {
  
  const theme = useContext(themeContext)
  
  return (
    <View style={{ alignItems: 'center', backgroundColor: theme.background, flex: 1}}>
      <Text style={{top: '50%', color: theme.text}}>Aktuelles</Text>
    </View>
  )
}

export default News

const styles = StyleSheet.create({

    button: {
        backgroundColor: 'rgba(0, 48, 135, 90)',

      }
})