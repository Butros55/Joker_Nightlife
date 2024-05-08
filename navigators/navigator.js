import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getItem } from '../components/asyncStorage';
import theme from '../theme/theme';
import themeContext from '../context/themeContext';
import { EventRegister } from 'react-native-event-listeners';

//screens
import LoginScreen from './../screens/Login';
import OnboardingScreen from './../components/Onboarding';
import DrawerScreen from './Draw';
import MehrScreen from '../screens/Mehr/Mehr'
import SettingsScreen from '../screens/settings/Settings';
import Muttizettel from '../screens/Mehr/Muttizettel';
import ProfileSettings from '../screens/settings/profileSettings/ProfilSettings'
import profileSettingsName from '../screens/settings/profileSettings/profileSettingsName/profileSettingsName';
import profileSettingsSecurity from '../screens/settings/profileSettings/profileSettingsSecurity';
import PrivacySettings from '../screens/settings/privacy/privacySettings';
import NotificationsSettings from '../screens/settings/notifications/notificationsSettings';
import profileSettingsEmail from '../screens/settings/profileSettings/profileSettingsName/profileSettingsEmail';
import PicturesAll from '../screens/PicturesAll';
import VIPBook from '../screens/VIPBook';

const Stack = createNativeStackNavigator();

const Navigator = () => {


  const [darkMode, setdarkMode] = useState();
  
  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setdarkMode(data)
      console.log(data)
    })
    return() => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])


  const [showOnboarding, setShowOnboarding] = useState(null);
  useEffect(()=>{
    checkIfAlreadyOnboarded();
  },[])

  const checkIfAlreadyOnboarded = async ()=>{
    let onboarded = await getItem('onboarded');
    if(onboarded=='true'){
      // hide onboarding
      setShowOnboarding(false);
    }else{
      // show onboarding
      setShowOnboarding(true);
    }
  }

  if(showOnboarding==null){
    return null;
  }

  if(showOnboarding) {
    return (
      <themeContext.Provider value={[darkMode === true ? theme.dark : theme.light]}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Onboarding' screenOptions={{ gestureEnabled: false, animationTypeForReplace: 'pop'}}>
            <Stack.Screen options={{headerShown: false }}  name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen options={{headerShown: false, animation: 'fade' }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{headerShown: false }} name="Drawer" component={DrawerScreen} />
            <Stack.Screen options={{headerShown: false }} name="Mehr" component={MehrScreen} />
            <Stack.Screen options={{headerShown: false }} name="Settings" component={SettingsScreen} />
            <Stack.Screen options={{headerShown: false }} name="Muttizettel" component={Muttizettel} />
            <Stack.Screen options={{headerShown: false }} name="ProfileSettings" component={ProfileSettings} />
            <Stack.Screen options={{headerShown: false }} name="ProfileSettingsSecurity" component={profileSettingsSecurity} />
            <Stack.Screen options={{headerShown: false }} name="ProfileSettingsName" component={profileSettingsName} />
            <Stack.Screen options={{headerShown: false }} name="NotificationsSettings" component={NotificationsSettings} />
            <Stack.Screen options={{headerShown: false }} name="PrivacySettings" component={PrivacySettings} />
            <Stack.Screen options={{headerShown: false }} name="ProfileSettingsEmail" component={profileSettingsEmail} />
            <Stack.Screen options={{headerShown: false }} name="PicturesAll" component={PicturesAll} />
            <Stack.Screen options={{headerShown: false }} name="VIPBook" component={VIPBook} />
          </Stack.Navigator>
        </NavigationContainer>
      </themeContext.Provider>
    )
  }else{
    return (
      <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login' screenOptions={{ gestureEnabled: false }}>
            <Stack.Screen options={{headerShown: false }}  name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen options={{headerShown: false, animation: 'fade' }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{headerShown: false }} name="Drawer" component={DrawerScreen} />
            <Stack.Screen options={{headerShown: false }} name="Mehr" component={MehrScreen} />
            <Stack.Screen options={{headerShown: false }} name="Settings" component={SettingsScreen} />
            <Stack.Screen options={{headerShown: false }} name="Muttizettel" component={Muttizettel} />
            <Stack.Screen options={{headerShown: false }} name="ProfileSettings" component={ProfileSettings} />
            <Stack.Screen options={{headerShown: false }} name="ProfileSettingsSecurity" component={profileSettingsSecurity} />
            <Stack.Screen options={{headerShown: false }} name="ProfileSettingsName" component={profileSettingsName} />
            <Stack.Screen options={{headerShown: false }} name="NotificationsSettings" component={NotificationsSettings} />
            <Stack.Screen options={{headerShown: false }} name="PrivacySettings" component={PrivacySettings} />
            <Stack.Screen options={{headerShown: false }} name="ProfileSettingsEmail" component={profileSettingsEmail} />
            <Stack.Screen options={{headerShown: false }} name="PicturesAll" component={PicturesAll} />
            <Stack.Screen options={{headerShown: false }} name="VIPBook" component={VIPBook} />
          </Stack.Navigator>
        </NavigationContainer>
      </themeContext.Provider>
    )
  }
}

export default Navigator;