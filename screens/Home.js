import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Carousel from '../components/carousel'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import carouselList from '../components/carouselItems'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import VIPList from '../components/UnsereBereiche'
import VIPListItems from '../components/UnsereBereicheItems'
import { useState, useRef } from 'react';

const width = Dimensions.get('window').width;


const Home = () => {


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
                style={{backgroundColor: 'white'}}
                showsVerticalScrollIndicator={false}
            >
                <Text style={{ fontSize: 20, top: 20, fontWeight: 400, alignSelf: 'center'}}>Unsere Events</Text>
                <Carousel list={carouselList} width={width} />
                <VIPList list={VIPListItems} width={width}/>
            </ScrollView>
        </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export default Home