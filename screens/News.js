import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


//styles
import {
    ButtonContainer_login
  } from '../components/styles';

const News = ({navigation}) => {


  return (
    <View style={{ alignItems: 'center', backgroundColor: 'white', flex: 1}}>
      <Text style={{top: '50%'}}>Aktuelles</Text>
    </View>
  )
}

export default News

const styles = StyleSheet.create({

    button: {
        backgroundColor: 'rgba(0, 48, 135, 90)',

      }
})