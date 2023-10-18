import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Icon, Button } from '@rneui/themed';
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
    const { height } = Dimensions.get("window");

    const print = async () => {
      // On iOS/android prints the given html. On web prints the HTML from the current page.
      await Print.printAsync({
        uri: html,
        printerUrl: selectedPrinter?.url, // iOS only
      });
    };

  return (
    <View style={{ backgroundColor: theme.background, flex: 1, height}}>
            <View style={{flex: 1, alignItems: 'center', top: '15%'}}>
                {/* <PdfRead /> */}
            </View>
        <View style={{ position: 'absolute', top: 40}}>
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
        <View style={{alignSelf: 'center', top: '60%'}}>
        <Button
            titleStyle={{color: theme.texttfghz, paddingLeft: 5}}
            buttonStyle={{backgroundColor: theme.button, borderRadius: 8, alignSelf: 'center', width : '90%'}}
            title='Drucken'
            onPress={() => {print()}}
            icon={
                <Icon
                type='ionicon'
                name='print-outline'
                size={18}
                iconStyle={{color: theme.text}}
              />
            }
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