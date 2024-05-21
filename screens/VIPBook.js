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


const width = Dimensions.get('window').width;
const CARD_WIDTH = 340;
const CARD_HEIGHT = 550;

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
          style={styles.cardContainer}
        >
          <View style={[styles.card, {backgroundColor: theme.overlay}]}>
            <View style={styles.imageBox}>
              <Image style={styles.imageHome} source={item.imageHome}/>
              <View>
                <Text style={{paddingLeft: 10, fontWeight: 600, fontSize: 20, top: '20%', color: theme.text}}>{item.name}</Text>
                <Text style={{paddingLeft: 10, fontWeight: 300, fontSize: 15, top: '20%', color: theme.text}}>{item.description}</Text>
              </View>
              <View style={{ paddingTop: 30}}>
                <Text style={{paddingLeft: 10, fontWeight: 300, fontSize: 15, top: '20%', color: theme.text, fontWeight: 300}}>Ausgewähltes Datum: {date}</Text>
              </View>
            </View>
              <View>
                <Text style={{paddingLeft: 10, fontSize: 11, top: '20%', color: theme.text, fontWeight: 200}}>
                  Für die Reservierung wird eine Gebühr von 5€ berechnet. Bitte nach Reservierungsabschließung Überweisen.
                </Text>
                <Text style={{paddingLeft: 10, fontSize: 11, top: '20%', color: theme.text, fontWeight: 200}}>
                  Der Restbetrag für die Reservierung wird Vorort abgerechnet.
                </Text>
              </View>
          </View>
        </View>
        <View style={{flex: .8, top: '10%', width: '89%', alignSelf: 'center'}}>
            <Button
              title={'Reservierung abschließen'}
              titleStyle={{color: theme.text}}
              style={{paddingVertical: 10, alignContent: 'flex-end'}}
              buttonStyle={[styles.button, {backgroundColor: 'rgb(115,194,251)'}]}
              onPress={() => navigation.navigate('VIPAbschluss', { item: item })}
              />
          </View>
      </ScrollView>
    </GestureHandlerRootView>
  )
}

export default VIPBook

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 25
  },
  aniBox: {

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
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
    height: 200,
    width: 340
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
    top: '7%'
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
    color: '#555',
    height: 100
  }
  });