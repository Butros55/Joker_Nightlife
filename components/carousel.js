import * as React from 'react';
import { useState, useRef } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';
import themeContext from '../theme/themeContext';
import { useContext } from 'react'

import {
    Panel_Up,
  } from './styles';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import theme from '../theme/theme';

//screens
import { TouchableOpacity } from 'react-native-gesture-handler';



function Carousels({list, width}) {
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
        
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0)', top: 20}}>
            <Text style={{ fontSize: 20, top: 20, fontWeight: 700, alignSelf: 'center', color: theme.text}}>Unsere Events</Text>
            <Carousel
                loop={true}
                width={width}
                height={width / 1.5}
                autoPlay={true}
                data={list}
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
                            style={{ height: '95%'}}
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
                    style={{ borderRadius: 40, backgroundColor: 'rgb(20, 20, 20)' }}
                    behavior={Platform.OS === 'ios' ? 'padding' : "height"}
                >
                    <View style={{flex: 0.5}}>
                        <Image source={Images} style={[styles.image, { width, borderRadius: 30}]} />
                    </View>
                    <View style={{flex: 1, backgroundColor: 'rgb(20, 20, 20)', width}}>
                        <Text style={styles.headtext}>{Title}</Text>
                        <Text style={styles.descriptiontext}>{Description}</Text>
                    </View>
                </Panel_Up>
            </BottomSheetModal>
        </View>
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
        paddingLeft: 20,
        top: '30%',
    },
    subheaderText: {
        color: 'black',
        fontSize: 30,
        paddingLeft: 20,
        top: '30%'
    },
    descriptiontext: {
        color: 'white',
        fontSize: 16,
        top: '10%',
    }
})