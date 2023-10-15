import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native';

const CoustomDrawer = (props) => {
    
    const { height } = Dimensions.get("window");
    const [focused, setfocused] = useState('Mein Joker');
    const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{backgroundColor: 'white'}}
            style={{flex: 1}}
            scrollEnabled={true}
        >
            <View 
                style={{
                    backgroundColor: 'black',
                    flex: 0.1,
                    borderBottomRightRadius: 30,
                    borderBottomLeftRadius: 30,
                    top: '-20%'
                }}
            >
                <View style={{height: 250}}>
                    <Text style={{color: 'white', top: '70%'}}>Geret Wessling</Text>
                </View>
            </View>
            <View style={{height: height * 0.6}}>
                {Buttons(focused, setfocused, 'Mein Joker', navigation, 'Start', 'StartTab')}
                {Buttons(focused, setfocused, 'Coupons', navigation, 'Start', 'CouponsTab')}
                {Buttons(focused, setfocused, 'Aktuelles', navigation, 'Start', 'AktuellesTab')}
                {Buttons(focused, setfocused, 'Nightshots', navigation, 'Start', 'FotosTab')}
                {Buttons(focused, setfocused, 'Mehr', navigation, 'Mehr', '')}
                <View style={{top: '40%'}}>
                    {Buttons(focused, setfocused, 'Einstellungen', navigation, 'Settings', '')}
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

const Buttons = (focused, setfocused, title, navigation, path, screenpath) => {
    return(
        <TouchableOpacity
            style={{
                left: 10,
                paddingVertical: 15,
                backgroundColor: focused == title ? 'rgba(20,20,20,0.1)' : 'white',
                borderRadius: 5,
                width: '93%',
                top: '-20%'
            }}
            onPress={() => {navigation.navigate(path ,{screen: screenpath}), setfocused(title)}}
        >
            <Text style={{
                paddingLeft: 10,
                fontWeight: focused == title ? 700 : 300
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default CoustomDrawer