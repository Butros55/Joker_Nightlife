import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native';

const CoustomDrawer = (props) => {

    const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'white'}}>
            <TouchableOpacity
                onPress={() => {navigation.navigate('Start' ,{screen: 'StartTab'})}}
            >
                <Text>Mein Joker</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {navigation.navigate('Start' ,{screen: 'CouponsTab'})}}
            >
                <Text>Coupons</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {navigation.navigate('Start' ,{screen: 'AktuellesTab'})}}
            >
                <Text>Aktuelles</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {navigation.navigate('Start' ,{screen: 'FotosTab'})}}
            >
                <Text>Nightshots</Text>
            </TouchableOpacity>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
    </View>
  )
}

export default CoustomDrawer