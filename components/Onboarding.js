import React, { useRef, useState } from 'react'
import { Animated, StyleSheet, View} from 'react-native'
import styled from 'styled-components';
import { FlatList } from 'react-native';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { setItem } from './asyncStorage';


//screens
import slides from '../screens/OnboardingScreen'
import OnboardingItems from '../Items/OnboardingItems';
import Paginator from './Paginator';

const OnboardingScreen = () => {

    const [buttonText, setbuttonText] = useState('Weiter');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const scrollTo = () => {
        if (currentIndex < slides.length - 2) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1});
        }
        else {
            navigation.navigate('Login');
            setItem('onboarded', 'true');
        }
    };

    const checkLastPage = () => {
        if (currentIndex === slides.length - 1) {
            setbuttonText('Starten');
        }
        else {
            setbuttonText('Weiter')
        }
    }

    const slidesRef = useRef(null);
    const video = React.useRef(null);
    const viewConfig = useRef({viewAreaCoveragePrecentThreshold: 58}).current;

    return (
        <View style={styled.container}>
            <View>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnboardingItems item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig.current}
                    ref={slidesRef}
                    onMomentumScrollEnd={checkLastPage}
                />
                </View>
                <View style={{position: 'absolute', alignSelf: 'center', top: '82%'}}>
                    <Button
                        onPress={() => { scrollTo() }}
                        buttonStyle={styles.button}
                        title={ buttonText }
                        containerStyle={{paddingBottom: 10}}
                    >
                    </Button>
                </View>
                <View style={{position: 'absolute', alignSelf: 'center', top: '92%'}}>
                <Paginator data={slides} scrollX={scrollX} />
            </View>
        </View>
    );
}
    
export default OnboardingScreen

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        borderRadius: 25,
        height: 40,
        width: 190,
        backgroundColor: 'black'
    },
    image: {
        flex: 1,
        width: '100%',
        opacity: 0.6
    },
})