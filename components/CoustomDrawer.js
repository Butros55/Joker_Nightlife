import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native';
import themeContext from '../theme/themeContext';
import { useContext } from 'react';

const CoustomDrawer = (props) => {
    
    const { height } = Dimensions.get("window");
    const [focused, setfocused] = useState('Mein Joker');
    const navigation = useNavigation();
    const theme = useContext(themeContext)

  return (
    <View style={{flex: 1, backgroundColor: theme.layout}}>
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{backgroundColor: theme.layout}}
            style={{flex: 1}}
            scrollEnabled={false}
        >
            <View 
                style={{
                    backgroundColor: theme.text,
                    flex: 0.1,
                    borderBottomRightRadius: 30,
                    borderBottomLeftRadius: 30,
                    top: '-20%'
                }}
            >
                <View style={{height: 250}}>
                    <Text style={{color: theme.background, top: '70%'}}>Geret Wessling</Text>
                </View>
            </View>
            <View style={{height: height * 0.6, backgroundColor: theme.layout}}>
                {Buttons(focused, setfocused, 'Mein Joker', navigation, 'Start', 'StartTab', theme)}
                {Buttons(focused, setfocused, 'Coupons', navigation, 'Start', 'CouponsTab', theme)}
                {Buttons(focused, setfocused, 'Aktuelles', navigation, 'Start', 'AktuellesTab', theme)}
                {Buttons(focused, setfocused, 'Nightshots', navigation, 'Start', 'FotosTab', theme)}
                {Buttons(focused, setfocused, 'Mehr', navigation, 'Mehr', '', theme)}
                <View style={{top: '40%'}}>
                    {Buttons(focused, setfocused, 'Einstellungen', navigation, 'Settings', '', theme)}
                    <TouchableOpacity
                        style={{
                            left: 10,
                            paddingVertical: 15,
                            borderRadius: 5,
                            width: '93%',
                            top: '-20%'
                        }}
                        onPress={() => {navigation.navigate('Login')}}
                    >
                        <Text style={{
                            paddingLeft: 10,
                            fontWeight: 300,
                            color: theme.text
                            }}
                        >
                            Abmelden
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    </View>
  )
}

const Buttons = (focused, setfocused, title, navigation, path, screenpath, theme) => {
    return(
        <TouchableOpacity
            style={{
                left: 10,
                paddingVertical: 15,
                backgroundColor: focused == title ? theme.focused : theme.notFocused,
                borderRadius: 5,
                width: '93%',
                top: '-20%'
            }}
            onPress={() => {navigation.navigate(path ,{screen: screenpath}), setfocused(title)}}
        >
            <Text style={{
                paddingLeft: 10,
                fontWeight: focused == title ? 700 : 300,
                color: theme.text
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default CoustomDrawer