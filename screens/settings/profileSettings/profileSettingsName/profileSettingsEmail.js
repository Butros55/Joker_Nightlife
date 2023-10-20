import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import firebase from '../../../../components/firebaseConfig'
import themeContext from '../../../../context/themeContext';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';

const ProfileSettingsEmail = ({navigation}) => {

  const auth = firebase.auth();
  const theme = useContext(themeContext)



  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: theme.background}}>
      <View style={{ alignItems: 'center', top: '5.8%'}}>
        <Text style={{fontSize: 17, fontWeight: 500, color: theme.text}}>E-Mail</Text>
      </View>
      <View>
        {/* back button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{alignSelf: 'flex-start', paddingLeft: 30, top: 30, height: 60, width: 60}}
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
      </View>
        <View style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}>
          <Text>{auth.currentUser.email}</Text>
        </View>
    </GestureHandlerRootView>
  )
}

export default ProfileSettingsEmail