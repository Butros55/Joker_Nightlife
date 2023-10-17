import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Button } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import themeContext from '../../theme/themeContext';
import { useContext } from 'react';
import * as Print from 'expo-print';
import PdfRead from '../../components/PdfRead';

const Muttizettel = ({navigation}) => {

  const theme = useContext(themeContext)
  const html = 'http://www.joker-nightlife.de/assets/erziehungsbeauftragung_disco_joker.pdf'

  const resetAsync = async () => {
    await removeItem('onboarded');
    navigation.push('Onboarding');
}

    const [selectedPrinter, setSelectedPrinter] = React.useState();

    const print = async () => {
      // On iOS/android prints the given html. On web prints the HTML from the current page.
      await Print.printAsync({
        uri: html,
        printerUrl: selectedPrinter?.url, // iOS only
      });
    };

  return (
    <View style={{ backgroundColor: theme.background, flex: 1}}>
        <View style={{flex: .2, justifyContent: 'center', backgroundColor: theme.background}}>
          {/* back button */}
          <TouchableOpacity
            onPress={() => {[navigation.goBack()]}}
            style={{alignSelf: 'flex-start', paddingLeft: 25}}
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
        </View>
      <View style={{flex: .7}}>
        <View style={{flex: .9}}>
            <PdfRead />
        </View>
        <View style={{justifyContent: 'flex-start', flex: .1, backgroundColor: 'white'}}>
        <Button
            style={{backgroundColor: 'black'}}
            title='Drucken'
            onPress={() => {print()}}
        />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12
  },
  rowLabel: {
    fontSize: 17,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  }
});

export default Muttizettel