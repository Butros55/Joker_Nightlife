import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import themeContext from '../theme/themeContext';
import { useContext } from 'react';
import {  Button } from '@rneui/themed';

const Pictures = ({navigation}) => {

  const theme = useContext(themeContext)

  const resetAsync = async () => {
    await removeItem('onboarded');
    navigation.push('Onboarding');
}

  return (
    <View style={{ backgroundColor: theme.background, flex: 1}}>
        <View style={{flex: .2, height: 150, justifyContent: 'flex-end', backgroundColor: theme.background}}>
          <TouchableOpacity
              onPress={() => {navigation.goBack()}}
              style={{alignSelf: 'flex-start', paddingLeft: 25}}
              >
            <Text style={{  color: 'rgb(0, 0, 0)', height: 30,}}>
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
      <View style={{flex: .8}}>
          <Button
            type={'clean'}
            onPress={() => { resetAsync() }}
            title='Reset AsyncStorage'
            style={{top : '10%'}}
          >
            Mehr
          </Button>
      </View>
    </View>
  )
}

export default Pictures