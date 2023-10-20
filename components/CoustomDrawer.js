import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native';
import themeContext from '../context/themeContext';
import { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {  Button, Icon } from '@rneui/themed';
import firebase from './firebaseConfig';
import { getItem } from '../components/asyncStorage';
import userDataContext from '../context/userDataContext'



const CoustomDrawer = (props) => {

    const { height } = Dimensions.get("window");
    const [focused, setfocused] = useState('Mein Joker');
    
    const auth = firebase.auth();

    const navigation = useNavigation();

    const theme = useContext(themeContext)
    const userData = useContext(userDataContext)
    
    const [vorname, setvorname] = useState();
    const [nachname, setnachname] = useState();
  

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace('Login')
        })
    }

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
                    top: -60
                }}
            >
                <View style={{height: 150, top: '10%', justifyContent: 'center'}}>
                    <Text>
                        <View style={{flexDirection:'row', alignItems:'center', paddingLeft: 10}}>
                            <TouchableOpacity>
                                <Image source={require('../assets/pictures/profilepicture.png')} style={{borderColor: 'white', borderWidth: 1, borderRadius: 999, width: 72, height: 72}} />
                            </TouchableOpacity>
                            
                            <Text style={{color: 'white', paddingLeft: 10}}>
                                {userData.vorname}
                                {'\n'}
                                {userData.zweitername !== '' && <Text>{userData.zweitername}{'\n'}</Text>}
                                {userData.nachname}
                            </Text>
                        </View>
                    </Text>
                </View>
                
            </View>
            <View style={{flex: 1,height: height * 0.68, backgroundColor: theme.background}}>
                <View style={{top: '-5%'}}>
                    {Buttons(focused, setfocused, 'Mein Joker', navigation, 'Start', 'StartTab', theme, 'home', 'home-outline', 'ionicon' )}
                    {Buttons(focused, setfocused, 'Coupons', navigation, 'Start', 'CouponsTab', theme, 'percent', 'percent-outline', 'material-community')}
                    {Buttons(focused, setfocused, 'Aktuelles', navigation, 'Start', 'AktuellesTab', theme, 'notifications', 'notifications-outline', 'ionicon')}
                    {Buttons(focused, setfocused, 'Nightshots', navigation, 'Start', 'FotosTab', theme, 'aperture', 'aperture-outline', 'ionicon')}
                    {Buttons(focused, setfocused, 'Einstellungen', navigation, 'Settings', '', theme, 'settings', 'settings-outline', 'ionicon')}
                    {Buttons(focused, setfocused, 'Mehr', navigation, 'Mehr', '', theme, 'ellipsis-horizontal-outline', 'ellipsis-horizontal-outline', 'ionicon')}
                </View>
            </View>
                <View style={{flex: 0.3,height: 60, justifyContent: 'center'}}>
                    <Button
                        icon={() => <Ionicons name={'log-out-outline'} size={15} color={theme.text} />}
                        type='clear'
                        style={{
                            left: 10,
                            paddingVertical: 15,
                            borderRadius: 5,
                            width: '93%',
                        }}
                        onPress={() => {handleSignOut()}}
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
        </DrawerContentScrollView>
    </View>
  )
}

const Buttons = (focused, setfocused, title, navigation, path, screenpath, theme, icon, iconoutline, type) => {
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
            icon={() => <Icon name={focused == title ? icon : iconoutline} size={15} type={type} color={theme.text} />}
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