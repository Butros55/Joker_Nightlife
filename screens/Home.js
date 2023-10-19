import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Carousel from '../components/carousel'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import carouselList from '../Items/carouselItems'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import VIPList from '../components/UnsereBereiche'
import VIPListItems from '../components/UnsereBereicheItems'
import { useState, useRef } from 'react';
import themeContext from '../context/themeContext';
import { useContext } from 'react'
import { useEffect } from 'react'
import { getItem } from '../components/asyncStorage';



const width = Dimensions.get('window').width;


const Home = () => {
    
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
    
    useEffect(()=>{
      getUserItems();
    },[])

    const [vorname, setvorname] = useState();
    const [nachname, setnachname] = useState();
  
    const getUserItems = async () => {
      let vorname = await getItem('vorname');
      let nachname = await getItem('nachname');
      setvorname(vorname)
      setnachname(nachname)
    }
  

    return (
        <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
            <ScrollView
                style={{backgroundColor: theme.background}}
                showsVerticalScrollIndicator={false}
            >
                <View style={{flex: .2, height: 150, justifyContent: 'flex-end'}}>
                    <Text style={{ fontSize: 40, fontWeight: 700, paddingLeft: 25, color: theme.text}}>Hallo,</Text>
                    <Text style={{ fontSize: 35, fontWeight: 300, paddingLeft: 25, color: theme.text}}>{vorname}</Text>
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