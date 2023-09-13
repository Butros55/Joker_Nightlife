import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'

export default OnboardingItems = ({item}) => {

    const { width, height } = useWindowDimensions();

    return (
        <View style={[styles.container, { width, height: height * 1.1, backgroundColor: 'white' }]}>

            <Image source={item.image} style={[styles.image, { width , resizeMode: 'contain'}]} />

            <View style={{ flex: 0.6 }}>
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
        flex: 0.7,
        justifyContent: 'center',
    },

    title: {
        fontWeight: '800',
        fontSize: 28,
        color: 'rgb(0, 48, 135)',
        textAlign: 'center',
        marginBottom: 10,
    },

    description: {
        textAlign: 'center',
        fontWeight: '300',
        color: 'black',
        paddingHorizontal: 64
    }

})