import * as React from 'react';
import { useState, useRef } from 'react';
import { Dimensions, Text, View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//screens
import carousel from '../components/carouselItems';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
    Panel_Up,
  } from '../components/styles';


  
  
  function Carousels() {
      
    const openEvents = ( item ) => {
        setImages(item.image);
        setTitle(item.title);
        setDescription(item.description);
    }


    const ModalRef = useRef(null);

    const width = Dimensions.get('window').width;
    const navigation = useNavigation();

    const [Images, setImages] = useState('');
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');

    return (
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white'}}>
            <BottomSheetModalProvider>
                <Text style={{ fontSize: 25, alignSelf: 'center', top: 50, fontWeight: 900 }}>Unsere Events</Text>
                <Carousel
                    loop={true}
                    width={width}
                    height={width / 1.7}
                    autoPlay={true}
                    data={carousel}
                    scrollAnimationDuration={1000}
                    autoPlayInterval={5000}
                    mode='parallax'
                    renderItem={({ item }) => (
                        <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            borderRadius: 25,
                        }}
                        >
                            <TouchableOpacity
                                onPress={() => {[openEvents( item ), ModalRef.current?.present()]}}
                                style={{ height: '95%', top: '20%'}}
                                >
                                <Image source={item.image} style={[styles.image, { width: '100%', borderRadius: 25}]} />
                            </TouchableOpacity>

                        </View>
                    )}
                />
                <BottomSheetModal
                    ref={ModalRef}
                    index={0}
                    snapPoints={['100%']}
                    handleIndicatorStyle={{ display: "none" }}
                    backgroundStyle={{ backgroundColor: 'rgba(0.0.0.0)' }}
                >
                    <Panel_Up 
                        style={{ borderRadius: 40, backgroundColor: 'rgb(13, 0, 26)' }}
                        behavior={Platform.OS === 'ios' ? 'padding' : "height"}
                    >
                        <View style={{flex: 0.5}}>
                            <Image source={Images} style={[styles.image, { width, borderRadius: 30}]} />
                        </View>
                        <View style={{flex: 1, backgroundColor: 'rgb(13, 0, 26)', width}}>
                            <Text style={styles.headtext}>{Title}</Text>
                            <Text style={styles.descriptiontext}>{Description}</Text>
                        </View>
                    </Panel_Up>
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}

export default Carousels

const styles = StyleSheet.create ({

    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    backgroundPanel: {
        backgroundcolor: 'white',
    },
    headtext: {
        color: 'white',
        fontSize: 30,
        alignSelf: 'center',
        top: '3%'
    },
    descriptiontext: {
        color: 'white',
        fontSize: 16,
        top: '10%'
    }
})