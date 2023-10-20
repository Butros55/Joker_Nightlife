import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Carousel from '../components/carousel'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import carouselList from '../Items/carouselItems'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import VIPList from '../components/UnsereBereiche'
import VIPListItems from '../Items/UnsereBereicheItems'
import { useState, useRef } from 'react';
import themeContext from '../context/themeContext';
import { useContext } from 'react'
import userDataContext from '../context/userDataContext'


const width = Dimensions.get('window').width;


const Home = () => {
    
    const userData = useContext(userDataContext)
    const theme = useContext(themeContext)

    const ModalRef = useRef(null);
    const openEvents = ( item ) => {
        setImages(item.image);
        setTitle(item.title);
        setDescription(item.description);
    }

    const [Images, setImages] = useState('');
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');

  

    return (
        <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
            <ScrollView
                style={{backgroundColor: theme.background}}
                showsVerticalScrollIndicator={false}
            >
                <View style={{flex: .2, height: 150, justifyContent: 'flex-end'}}>
                    <Text style={{ fontSize: 40, fontWeight: 700, paddingLeft: 25, color: theme.text}}>Hallo,</Text>
                    <Text style={{ fontSize: 35, fontWeight: 300, paddingLeft: 25, color: theme.text}}>{userData.vorname}</Text>
                </View>
                <View style={{flex: .8}}>
                    <Carousel list={carouselList} width={width} />
                    <VIPList list={VIPListItems} width={width}/>
                </View>
            </ScrollView>
        </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export default Home