import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import GridImageView from 'react-native-grid-image-viewer';
import themeContext from '../context/themeContext';
import { useEffect, useState, useContext } from 'react';
import firebase from '../components/firebaseConfig';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Input, Icon, Button } from '@rneui/themed';

const PicturesAll = ({route, navigation}) => {
  const { title } = route.params;
  const theme = useContext(themeContext)
  const [sampleImage, setSampleImage] = useState([]); 

  const getSampleImage = async () => {
      const imageRefs = await firebase.storage().ref().child('nightshots/' + title + '/images').listAll();
      const urls = await Promise.all(imageRefs.items.map((ref) => ref.getDownloadURL()));
      setSampleImage(urls);
  }
  useEffect(()=>{
    getSampleImage()
  },[])

  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <ScrollView style={{ backgroundColor: theme.background, flex: 1}}>
      {/* back button */}
      <TouchableOpacity
          onPress={() => {[navigation.goBack()]}}
          style={{alignSelf: 'flex-start', paddingLeft: 30, top: 45, height: 80, width: 60}}
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
      <View style={{flex: .2, height: 40, justifyContent: 'flex-end', backgroundColor: theme.background}}>
        <Text style={{ fontSize: 35, fontWeight: 300, paddingLeft: 25, color: theme.text}}>{title}</Text>
      </View>
      <View style={{top: 20}}>
        <GridImageView 
          data={sampleImage}
          transparent={1}
          heightOfGridImage={100}
        />
      </View>
    </ScrollView>
    </GestureHandlerRootView>
    
  );
}

export default PicturesAll