import React, { useRef } from 'react'
import { StyleSheet, View, Text , Dimensions} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';




const OnboardingScreen = () => {

const navigation = useNavigation();

const handledone = () => {
    navigation.navigate('Login')
}
    
  return (
    <View style={styles.container}>
        <Onboarding
            onSkip={handledone}
            onDone={handledone}
            pages={[
                {
                    backgroundColor: '#eeeee4',
                    image: (
                        <LottieView
                            source={require('../files/animations/welcome.json')}
                            autoPlay
                            style={{
                                width: 300,
                                height: 300
                            }}
                        />
                    ),
                    title: 'Wilkommen',
                    subtitle: 'bei der Joker Nightlife App',
                },
                {
                    backgroundColor: '#F6DCBC',
                    image: (
                        <LottieView
                            source={require('../files/animations/news.json')}
                            autoPlay
                            style={{
                                width: 200,
                                height: 200
                            }}
                        />
                    ),
                    title: 'Aktuelle News',
                    subtitle: 'Immer auf den aktuellen stand von Joker bleiben',
                },
                {
                    backgroundColor: '#B4B9BC',
                    image: (
                        <LottieView
                            source={require('../files/animations/fotos.json')}
                            autoPlay
                            style={{
                                width: 220,
                                height: 220
                            }}
                        />
                    ),
                    title: 'Fotos',
                    subtitle: 'Siehe alle neuen Fotos auf einem Blick',
                },
                {
                    backgroundColor: '#DBBCE3',
                    image: (
                        <LottieView
                            source={require('../files/animations/kalendar.json')}
                            autoPlay
                            style={{
                                width: 300,
                                height: 300
                            }}
                        />
                    ),
                    title: 'Events',
                    subtitle: 'Behalte alle Termine im Blick',
                },
                {
                    backgroundColor: '#16242D',
                    image: (
                        <LottieView
                            source={require('../files/animations/party.json')}
                            autoPlay
                            style={{
                                width: 300,
                                height: 300
                            }}
                        />
                    ),
                    title: 'Los Geht´s',
                    subtitle: 'Viel spaß beim Feiern!!',
                },
            ]}
        />
    </View>
  )
}

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: 'white'
    }

});

export default OnboardingScreen