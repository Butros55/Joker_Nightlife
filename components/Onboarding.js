import React, { useRef, useState } from 'react'
import { Animated, StyleSheet, View} from 'react-native'
import styled from 'styled-components';
import { FlatList } from 'react-native';

import slides from '../screens/OnboardingScreen'
import OnboardingItems from './OnboardingItems';
import Paginator from './Paginator';


const OnboardingScreen = () => {

    const [curentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const slidesRef = useRef(null);

    const viewConfig = useRef({viewAreaCoveragePrecentThreshold: 58}).current;

    return (
        <View style={styled.container}>
            <View>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnboardingItems item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    onScroll={ Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,    
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig.current}
                    ref={slidesRef}
                    />
                </View>
            <View style={{position: 'absolute', alignSelf: 'center', top: '92%'}}>
                <Paginator data={slides} scrollX={scrollX} />
            </View>
        </View>
    );
}
    
export default OnboardingScreen

StyleSheet.create ({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})