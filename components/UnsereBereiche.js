import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useRef } from 'react';
import {
  Panel_Up,
} from './styles';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import Carousel from 'react-native-reanimated-carousel';
import themeContext from '../context/themeContext';
import { useContext } from 'react';



let nextId = 0;
const CARD_WIDTH = 170;
const CARD_HEIGHT = 220;

const VIPList = ({list, width}) => {
  
  const [Images, setImages] = useState('');
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [CarouselImageList, setCarouselImageList] = useState([]);
  const [Ambiente, setAmbiente] = useState('');
  const [music_discription, setMusic_discription] = useState('');

  const theme = useContext(themeContext)
  
  const test = useRef(null);
  const openEvents = ( item ) => {
      setImages(item.imageHome);
      setTitle(item.name);
      setDescription(item.music);
      setMusic_discription(item.music_discription);
      setAmbiente(item.ambiente);
    }

    
    const setCarouselImages = ({ item }) => {
      while(true) {
        if(item.images[nextId] !== undefined) {
          CarouselImageList.push({
            image: item.images[nextId],
            id: nextId++,
          });
        } else {
          break
        }
      }
    }

  

  return (
    <View style={{paddingVertical: 30}}>
      <Text style={{ fontSize: 20, top: -10, fontWeight: 200, color: theme.text, paddingLeft: 40}}>Unsere Bereiche</Text>
      <View style={styles.container}>

        {list.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {[openEvents( item ), setCarouselImages({ item }, test.current?.present())]}}
              style={styles.cardContainer}
            >
            <View style={[styles.card, {backgroundColor: theme.overlay}]}>
              <View style={styles.imageBox}>
                <Image style={styles.imageHome} source={item.imageHome}/>
              </View>
              <View>
                <View>
                  <Text style={{paddingLeft: 10, fontWeight: 800, fontSize: 20, top: '20%', color: theme.text}}>{item.name}</Text>
                  <Text style={{paddingLeft: 10, fontWeight: 500, fontSize: 15, top: '20%', color: theme.text}}>{item.music}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          )
        })}
      </View>
      

      <BottomSheetModal
            ref={test}
            index={0}
            snapPoints={['90%']}
            handleIndicatorStyle={{ display: "none" }}
            backgroundStyle={{ backgroundColor: 'rgba(0.0.0.0)' }}
            onDismiss={() => [setCarouselImageList([])]}
            >
            <Panel_Up 
                style={{ borderRadius: 40, backgroundColor: 'rgb(20, 20, 20)' }}
                >
                <View style={{flex: 0.5}}>
                    <Image source={Images} style={[styles.imagePanel, { width, borderRadius: 30}]} />
                    <Text style={styles.descriptiontext}>{Description}</Text>
                </View>
                <ScrollView style={{flex: 0.4, backgroundColor: 'rgb(20, 20, 20)'}}>
                  <View style={{flex: 1, backgroundColor: 'rgb(20, 20, 20)', width}}>
                    <View>
                      <Text style={{color: 'white', fontSize: 26, alignSelf: 'center', top: '12%'}}>Musikrichtungen</Text>
                      <Text style={{color: 'white', fontSize: 16, alignSelf: 'center', top: '12%'}}>{music_discription}</Text>
                    </View>
                    <Text style={{color: 'white', fontSize: 26, alignSelf: 'center', top: '9%'}}>Fotos zu dieser Location</Text>
                    <Carousel
                      loop={false}
                      width={width}
                      height={width / 1.2}
                      autoPlay={true}
                      data={CarouselImageList}
                      scrollAnimationDuration={1000}
                      autoPlayInterval={5000}
                      mode='parallax'
                      renderItem={({ item }) => (
                        <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                        >
                        <Image key={item.id} source={item.image} style={[styles.image, { width: '100%', borderRadius: 10}]} />
                  </View>
                )}
                />
                </View>
              </ScrollView>
            </Panel_Up>
        </BottomSheetModal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center'
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
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
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
    paddingTop: 10,
    marginLeft: '5%',
    alignItems: 'center',
  },
  imagePanel: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      resizeMode: 'stretch'
  },
  backgroundPanel: {
      backgroundcolor: 'white',
  },
  descriptiontext: {
      color: 'white',
      fontSize: 16,
      alignSelf: 'flex-end',
      top: -25,
      paddingRight: 20
  }
})

export default VIPList