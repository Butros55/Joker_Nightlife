import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import themeContext from '../../context/themeContext';
import { useContext } from 'react';


const AboutUs = ({navigation}) => {

  const theme = useContext(themeContext)
  const { width } = Dimensions.get("window");

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: theme.background}}>
      <View style={{ alignItems: 'center', top: '5.8%'}}>
        <Text style={{fontSize: 17, fontWeight: 500, color: theme.text}}>Impressum</Text>
      </View>
      <View>
        {/* back button */}
        <TouchableOpacity
          onPress={() => {[navigation.goBack()]}}
          style={{alignSelf: 'flex-start', paddingLeft: 30, top: 30, height: 60, width: 60}}
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
      <View style={{top: '5%'}}>
        <Text style={{textAlign: 'center', fontSize: 30, color: theme.text}}>Impressum</Text>
      </View>
      <View style={{flex: 1, top: '15%', flexGrow: 1, flexDirection: 'row'}}>
        <Text style={{flex: 1, textAlign: 'center', color: theme.text, paddingHorizontal: 20}}>
Joker Music Hall{"\n"}
{"\n"}
Martin Timmer{"\n"}
Schwarzer Weg 20{"\n"}
49809 Lingen{"\n"}
{"\n"}
Telefon: 0 59 1 - 7 38 06{"\n"}
Telefax: 0 59 1 - 6 52 40{"\n"}
info@joker-nightlife.de{"\n"}
www.joker-nightlife.de{"\n"}
{"\n"}
Vertretungsberechtigte Geschäftsführer:{"\n"}
Martin Timmer{"\n"}
{"\n"}
Registergericht:{"\n"}
Amtsgericht Lingen{"\n"}
{"\n"}
Inhaltlicher Verantwortlicher gemäß § 6 MDStV:{"\n"}
Martin Timmer{"\n"}{"\n"}
Quellenangaben für das verwendete Bildmaterial:{"\n"}
Adobe Stock, fotolia{"\n"}{"\n"}
Gestaltung und technische Realisierung:{"\n"}
Diese App wurde im Rahmen einer Projektarbeit, zur erlangung der Fachhochschulreife, erstellt.{"\n"}{"\n"}
von:{"\n"}
Leonie Drees{"\n"}
Alina vom Bruch{"\n"}
Maciej Brodazki{"\n"}
Geret Wessling
        </Text>
      </View>
    </GestureHandlerRootView>
  )
}

export default AboutUs