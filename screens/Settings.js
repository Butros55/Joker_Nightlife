import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


//styles
import {
    ButtonContainer_login
  } from '../components/styles';

const Settings = ({navigation}) => {


  return (
    <View style={{ alignItems: 'center', top: '45%'}}>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({

    button: {
        backgroundColor: 'rgba(0, 48, 135, 90)',

      }
})