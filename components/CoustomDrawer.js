import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native';
import themeContext from '../theme/themeContext';
import { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {  Button } from '@rneui/themed';

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
                    backgroundColor: 'rgb(40,40,40)',
                    flex: 0.1,
                    borderBottomRightRadius: 30,
                    borderBottomLeftRadius: 30,
                    top: '-8%'
                }}
            >
                <View style={{height: 150, top: '10%', justifyContent: 'center'}}>
                    <Text>
                        <View style={{flexDirection:'row', alignItems:'center', paddingLeft: 10}}>
                            <TouchableOpacity>
                                <Image source={require('../assets/pictures/profilepicture.png')} style={{borderColor: 'white', borderWidth: 1, borderRadius: 999, width: 72, height: 72}} />
                            </TouchableOpacity>
                            
                            <Text style={{color: 'white', paddingLeft: 10}}>
                                Geret{'\n'}
                                Wessling
                            </Text>
                        </View>
                    </Text>
                </View>
                
            </View>
            <View style={{height: height * 0.6, backgroundColor: theme.background, top: '15%'}}>
                <View style={{top: -130}}>
                    {Buttons(focused, setfocused, 'Mein Joker', navigation, 'Start', 'StartTab', theme, 'home', 'home-outline' )}
                    {Buttons(focused, setfocused, 'Coupons', navigation, 'Start', 'CouponsTab', theme, 'cash', 'cash-outline')}
                    {Buttons(focused, setfocused, 'Aktuelles', navigation, 'Start', 'AktuellesTab', theme, 'notifications', 'notifications-outline')}
                    {Buttons(focused, setfocused, 'Nightshots', navigation, 'Start', 'FotosTab', theme, 'aperture', 'aperture-outline')}
                    {Buttons(focused, setfocused, 'Einstellungen', navigation, 'Settings', '', theme, 'settings', 'settings-outline')}
                    {Buttons(focused, setfocused, 'Mehr', navigation, 'Mehr', '', theme, 'ellipsis-horizontal-outline', 'ellipsis-horizontal-outline')}
                </View>
                <View style={{top: '30%'}}>
                    <Button
                        icon={() => <Ionicons name={'log-out-outline'} size={15} color={theme.text} />}
                        type='clear'
                        style={{
                            left: 10,
                            paddingVertical: 15,
                            borderRadius: 5,
                            width: '93%',
                            top: '10%'
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
                    </Button>
                </View>
            </View>
        </DrawerContentScrollView>
    </View>
  )
}

const Buttons = (focused, setfocused, title, navigation, path, screenpath, theme, icon, iconoutline) => {
    return(
        <Button
            type='clear'
            style={{
                left: 10,
                paddingVertical: 5,
                borderRadius: 5,
                width: '93%',
            }}
            buttonStyle={{
                backgroundColor: 'rgba(0,0,0,0)',
                left: 10,
                paddingVertical: 10,
                backgroundColor: focused == title ? theme.focused : theme.notFocused,
                borderRadius: 5,
                width: '93%',
                justifyContent: 'flex-start',
            }}
            icon={() => <Ionicons name={focused == title ? icon : iconoutline} size={15} color={theme.text} />}
            onPress={() => {navigation.navigate(path ,{screen: screenpath}), setfocused(title)}}
        >
            <View>
                <Text
                    adjustsFontSizeToFit={true}
                    style={{
                        paddingLeft: 10,
                        fontWeight: focused == title ? 700 : 300,
                        color: theme.text,
                    }}
                >
                    {title}
                </Text>
            </View>
        </Button>
    );
}

export default CoustomDrawer