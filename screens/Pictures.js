import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import themeContext from '../context/themeContext';
import { useEffect, useState, useContext, useRef } from 'react';
import firebase from '../components/firebaseConfig';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Input, Icon, Button } from '@rneui/themed';

const CARD_WIDTH = 340;
const CARD_HEIGHT = 220;

const Pictures = ({navigation}) => {
  
  //theme Context
  const theme = useContext(themeContext)
  
  //States
  const [folderNames, setFolderNames] = useState([]);
  const [sampleImage, setSampleImage] = useState([]); 

  //refs
  const ref = firebase.storage().ref('nightshots');
  const test = useRef(null);

  // functions

  const getSampleImage = async (source) => {
      const imageRefs = await firebase.storage().ref().child('nightshots/' + source + '/images').listAll();
      const urls = await Promise.all(imageRefs.items.map((ref) => ref.getDownloadURL()));
      setSampleImage(urls);
  }

  const getFolderNames = async () => {
    setFolderNames([])
    await ref
    .listAll()
    .then(res => {
      res.prefixes.forEach(async ref => {
        const thumbnail = await firebase
        .storage()
        .ref('nightshots/' + ref.name + '/thumbnail/thumbnail.jpg') //name in storage in firebase console
        .getDownloadURL()
        getSampleImage(ref.name)
        setFolderNames(prev => [...prev, {title: ref.name, thumbnail: thumbnail}])
      })
    })
}

useEffect(()=>{
  getFolderNames()
},[])

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ScrollView style={{ backgroundColor: theme.background, flex: 1}}>
        <View style={{flex: .2, height: 150, justifyContent: 'flex-end', backgroundColor: theme.background}}>
          <Text style={{ fontSize: 40, fontWeight: 800, paddingLeft: 25, color: theme.text}}>Aktuelle,</Text>
          <Text style={{ fontSize: 35, fontWeight: 300, paddingLeft: 25, color: theme.text}}>Nightshots vom Abend</Text>
        </View>
        {folderNames.map((item) => {
            return (
              <TouchableOpacity
                key={item.title}
                onPress={() => {navigation.navigate('PicturesAll', { title: item.title })}}
                style={styles.cardContainer}
              >
              <View style={[styles.card, {backgroundColor: theme.overlay}]}>
                <View style={styles.imageBox}>
                  <Image style={styles.imageHome} source={{uri: item.thumbnail}}/>
                </View>
                <View>
                  <View>
                    <Text style={{paddingLeft: 10, fontWeight: 800, fontSize: 20, top: '20%', color: theme.text}}>{item.title}</Text>
                    <Text style={{paddingLeft: 10, fontWeight: 500, fontSize: 15, top: '20%', color: theme.text}}>{item.music}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            )
          })}
      </ScrollView>
    </GestureHandlerRootView>
  );
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
    height: 200
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
    alignSelf: 'center',
    top: '5%'
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

export default Pictures