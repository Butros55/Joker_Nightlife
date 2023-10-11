import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useRef } from 'react';
import {
  Panel_Up,
} from './styles';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const CARD_WIDTH = 160;
const CARD_HEIGHT = 220;

const VIPList = ({list, width}) => {


  const test = useRef(null);
  const openEvents = ( item ) => {
      setImages(item.image);
      setTitle(item.title);
      setDescription(item.description);
  }

  const [Images, setImages] = useState('');
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');


  return (
    <View style={{paddingVertical: 30}}>
      <Text style={{ fontSize: 20, top: -5, fontWeight: 400, alignSelf: 'center', paddingBottom: 10 }}>VIP Bereiche</Text>
      <View style={styles.container}>

        {list.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={test.current?.present()}
              style={styles.cardContainer}
            >
            <View style={styles.card}>
              <View style={styles.imageBox}>
                <Image style={styles.image} source={item.image}/>
              </View>
              <View>
                <View>
                  <Text style={{paddingLeft: 10, fontWeight: 800, fontSize: 20, top: '20%'}}>{item.name}</Text>
                  <Text style={{paddingLeft: 10, fontWeight: 500, fontSize: 15, top: '20%'}}>{item.music}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: 'white',
    borderRadius: 25,
    shadowRadius: 25,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: 40
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    resizeMode: 'cover',
  },
  cardContainer: {
    marginLeft: 22,
    marginBottom: 40
  }
})

export default VIPList