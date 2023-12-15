import { StyleSheet, Text, View, Image, Dimensions, ViewProps } from 'react-native';
import { ScrollView, TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { Icon } from '@rneui/themed';
import themeContext from '../context/themeContext';
import { useContext, useRef, useState } from 'react';
import list from '../Items/VIPBookingItems'

const CARD_WIDTH = 340;
const CARD_HEIGHT = 220;

const width = Dimensions.get('window').width;


const News = ({navigation}) => {

  const test = useRef(null);
  const theme = useContext(themeContext)

  const [Images, setImages] = useState('');
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  
  const openEvents = ( item ) => {
    setImages(item.imageHome);
    setTitle(item.name);
    setDescription(item.music);
  }

  return (
    <GestureHandlerRootView style={{backgroundColor: theme.background, flex: 1}}>
      <ScrollView>
        <View style={{flex: .2, height: 180, justifyContent: 'flex-end', backgroundColor: theme.background, paddingBottom: 20}}>
            <Text style={{ fontSize: 40, fontWeight: 700, paddingLeft: 25, color: theme.text}}>VIP,</Text>
            <Text style={{ fontSize: 35, fontWeight: 300, paddingLeft: 25, color: theme.text}}>Buchung</Text>
        </View>
        <View style={{flex: .8}}>
        {list.map((item) => {
            return (
              <TouchableOpacity
              key={item.id}
                onPress={() => {[test.current?.present(), openEvents(item)]}}
                style={styles.cardContainer}
                >
              <View style={[styles.card, {backgroundColor: theme.overlay}]}>
                <View style={styles.imageBox}>
                  <Image style={styles.imageHome} source={item.imageHome}/>
                </View>
                <View>
                  <View>
                    <Text style={{paddingLeft: 10, fontWeight: 800, fontSize: 20, top: '20%', color: theme.text}}>{item.name}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    left: '3%'
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: 'white',
    borderRadius: 25,
    shadowRadius: 25,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: 40,
  },
  imageHome: {
    resizeMode: 'stretch',
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'stretch',
  },
  cardContainer: {
    marginBottom: 20,
    alignSelf: 'center'
  },
  descriptiontext: {
      color: 'white',
      fontSize: 16,
      alignSelf: 'flex-end',
      top: -25,
      paddingRight: 20
  },
  box: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    paddingHorizontal: 15
  },
  spacing: {
    paddingVertical: 10
  },
  content: {
    fontSize: 16,
    lineHeight: 30,
    color: '#555'
  }
})

export default News