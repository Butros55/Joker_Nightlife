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
  Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import themeContext from '../context/themeContext';
import list from '../Items/VIPBookingItems'
import {Calendar, LocaleConfig} from 'react-native-calendars';

const CARD_WIDTH = 340;
const CARD_HEIGHT = 220;

LocaleConfig.locales['de'] = {
  monthNames: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
  ],
  monthNamesShort: ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'],
  dayNames: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
  dayNamesShort: ['M', 'D', 'M', 'D', 'F', 'S', 'S'],
  today: "Heute"
};

LocaleConfig.defaultLocale = 'de';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const VIP = ({navigation}) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useContext(themeContext)
  const [selected, setSelected] = useState();
  const [buttonColor, setButtonColor] = useState('#f2f2f2')
  const [textColor, setTextColor] = useState('rgb(0,0,0)')

  return (
    <ScrollView style={{flex: 1, backgroundColor: theme.background}}>
        <View style={{height: 180, justifyContent: 'flex-end', backgroundColor: theme.background, paddingBottom: 20}}>
            <Text style={{ fontSize: 40, fontWeight: 700, paddingLeft: 25, color: theme.text}}>VIP Lounge</Text>
            <Text style={{ fontSize: 35, fontWeight: 300, paddingLeft: 25, color: theme.text}}>Reservieren</Text>
        </View>
        {list.map((item) => {
            return (
              <View key={item.id}>
                <TouchableOpacity
                  onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                    setSelected('')
                    setButtonColor('#f2f2f2')
                    setTextColor('rgb(0,0,0)')
                    if (expanded === item.id) {
                      setExpanded();
                    } else {
                      setExpanded(item.id);
                    }
                  }}
                  style={styles.cardContainer}
                  >
                <View style={[styles.card, {backgroundColor: theme.overlay}]}>
                  <View style={styles.imageBox}>
                    <Image style={styles.imageHome} source={item.imageHome}/>
                  </View>
                  <View>
                    <View>
                      <Text style={{paddingLeft: 10, fontWeight: 400, fontSize: 20, top: '20%', color: theme.text}}>{item.name}</Text>
                      <Text style={{paddingLeft: 10, fontWeight: 300, fontSize: 15, top: '20%', color: theme.text}}>{item.music}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              {expanded === item.id && (
                <View
                  style={{
                    backgroundColor: theme.overlay,
                    top: -40, width: CARD_WIDTH,
                    alignSelf: 'center',
                    shadowRadius: 25,
                    shadowColor: 'black',
                    shadowOpacity: 0.1,
                    shadowOffset: {
                      height: 50,
                      width: 0,
                    },
                    borderBottomRightRadius: 25,
                    borderBottomLeftRadius: 25
                  }}>
                  <View style={{padding: 20}}>
                    <Calendar
                      key={item.id}
                      style={{
                        borderRadius: 25,
                        height: 380
                      }}
                      theme={{
                        calendarBackground: 'white',
                      }}
                      onDayPress={day => {
                        setSelected(day.dateString);
                        setButtonColor('rgb(115,194,251)')
                        setTextColor('rgb(255,255,255)')
                      }}
                      markedDates={{
                        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                      }}
                    />
                    <Button
                      title={'Jetzt Reservieren'}
                      titleStyle={{color: textColor}}
                      style={{paddingVertical: 10}}
                      buttonStyle={[styles.button, {backgroundColor: buttonColor}]}
                      onPress={() => selected && navigation.navigate('VIPBook', { item: item, date: selected })}
                    />
                    <Text
                      style={{fontSize: 10, fontWeight: 200, paddingHorizontal: 10, paddingVertical: 5, color: theme.text}}
                    >
                      Für unsere Lounges berechnen wir eine Aufwandsgebühr von € 10,- pro Lounge + einen Mindestverzehr von € 10,- pro Person. (der Mindestverzehr entfällt bei Flaschenkauf).
                    </Text>
                  </View>
                </View>
               )}
              </View>
              )
          })}
    </ScrollView>
  );
};

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
    color: '#555',
    height: 100
  }
});

export default VIP;