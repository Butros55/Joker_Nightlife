import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Input, Icon, Button } from '@rneui/themed';

const Pictures = ({navigation}) => {


  return (
    <View style={{ alignItems: 'center', backgroundColor: 'white', flex: 1}}>
        <TouchableOpacity
            onPress={() => {navigation.goBack()}}
            style={{alignSelf: 'flex-start', paddingLeft: 30, top: 40}}
            >
          <Text style={{  color: 'rgb(0, 0, 0)', height: 30,}}>
            <Icon
              type='font-awesome'
              name='chevron-left'
              size={30}
            />
          </Text>
      </TouchableOpacity>
      <Text style={{top: '50%'}}>Mehr</Text>
    </View>
  )
}

export default Pictures