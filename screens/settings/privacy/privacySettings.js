import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import ITEMS from '../../../Items/Settings/privacy/PrivacySettingsItems'
import SettingButtons from '../../../components/SettingButtons'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import themeContext from '../../../context/themeContext';
import { useContext } from 'react';

const PrivacySettings = ({navigation}) => {

  const theme = useContext(themeContext)
  const { width } = Dimensions.get("window");

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: theme.background}}>
              <View style={{ alignItems: 'center', top: '7.6%'}}>
          <Text style={{fontSize: 17, fontWeight: 500, color: theme.text}}>Privatsphäre</Text>
        </View>
      <View>
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
      </View>
      <View style={{flex: 1, top: '8%'}}>
        <SettingButtons source={ITEMS} />
      </View>
    </GestureHandlerRootView>
  )
}

export default PrivacySettings