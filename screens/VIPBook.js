import React, {useState, useContext} from 'react';
import { Icon, Button } from '@rneui/themed';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
  Image,
  Dimensions
} from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import themeContext from '../context/themeContext';
import list from '../Items/VIPBookingItems'
import Carousel from 'react-native-reanimated-carousel';

const width = Dimensions.get('window').width;

const VIPBook = ({route, navigation}) => {

    const { item, date } = route.params;
    const theme = useContext(themeContext)
    const [expanded, setExpanded] = useState(false);
    const [selected, setSelected] = useState();
    const [buttonColor, setButtonColor] = useState('#f2f2f2')
    const [textColor, setTextColor] = useState('rgb(0,0,0)')

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: theme.background}}>
      <ScrollView>
        <View style={{ alignItems: 'center', top: 67}}>
          <Text style={{fontSize: 17, fontWeight: 500, color: theme.text}}>Reservierung</Text>
        </View>
        <View></View>
        {/* back button */}
        <TouchableOpacity
          onPress={() => {[navigation.goBack()]}}
          style={{alignSelf: 'flex-start', paddingLeft: 30, top: 45, height: 60, width: 60}}
        >
          <Text>
            <Icon
              type='font-awesome'
              name='chevron-left'
              size={30}
              color={theme.text}
            />
          </Text>
        </TouchableOpacity>
        <View
          style={{paddingTop:50}}
        >
          <Text
            style={{fontWeight:400, fontSize: 20, paddingHorizontal: 30, paddingBottom: 5}}
          >
            {item.name}
          </Text>
          <Text
            style={{fontWeight:200, fontSize: 15, paddingHorizontal: 30}}
          >
            {item.description}
          </Text>
          <View style={{top: 40, paddingHorizontal: 20}}>

          </View>
        </View>
        <Carousel
                loop={true}
                width={width}
                height={width / 1.5}
                autoPlay={true}
                data={item.images}
                scrollAnimationDuration={1000}
                autoPlayInterval={5000}
                mode='default'
                renderItem={({ items }) => (
                    <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        borderRadius: 25,
                    }}
                    >
                        <TouchableOpacity
                            onPress={() => {[openEvents( item ), ModalRef.current?.present()]}}
                            style={{ height: '85%'}}
                            >
                            <Image source={items} style={[styles.image, { width: '85%', borderRadius: 25}]} />
                        </TouchableOpacity>

                    </View>
                )}
            />
            <Button
              title={'Reservierung abschließen'}
              titleStyle={{color: theme.text}}
              style={{paddingVertical: 10}}
              buttonStyle={[styles.button, {backgroundColor: theme.button}]}
              onPress={() => console.log(item)}
            />
      </ScrollView>
    </GestureHandlerRootView>
  )
}

export default VIPBook

const styles = StyleSheet.create({
    button: {
      height: 45,
      borderRadius: 25,
      width: '90%',
      alignSelf: 'center'
    },
    imageHome: {
      height: 220,
      width: '100%',
      borderRadius: 25,
      top: '10%'
    },
  });