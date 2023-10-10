import * as React from 'react';
import { Dimensions, Text, View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

//screens
import carousel from '../components/carouselItems';

function Carousels() {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1, top: '7%' }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={carousel}
                scrollAnimationDuration={1000}
                autoPlayInterval={5000}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            borderRadius: 25,
                        }}
                    >
                        <Image source={item.image} style={[styles.image, { width: '90%' , borderRadius: 25}]} />
                    </View>
                )}
            />
        </View>
    );
}

export default Carousels

const styles = StyleSheet.create ({

    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
})