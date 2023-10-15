import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';

export default OnboardingItems = ({item}) => {

    const { width, height } = useWindowDimensions();

    return (
        <View style={[styles.container, { width, height, backgroundColor: 'white' }]}>
                <Video 
                    style={[styles.image, {width, height}]}
                    source={item.image}
                    resizeMode={ResizeMode.COVER}
                    isLooping={true}
                    isMuted={true}
                    shouldPlay={true}
                />
            <View style={{ flex: 0.1, top: '12%' }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        flex: 1,
        position: 'absolute'
    },

    title: {
        fontWeight: '800',
        fontSize: 28,
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },

    description: {
        textAlign: 'center',
        fontWeight: '200',
        color: 'white',
        paddingHorizontal: 64
    }

})