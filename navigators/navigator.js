import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getItem } from '../components/asyncStorage';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';

//screens
import LoginScreen from './../screens/Login';
import OnboardingScreen from './../components/Onboarding';
import DrawerScreen from './Draw';
import MehrScreen from '../screens/Mehr'
import SettingsScreen from '../screens/Settings';
import { EventRegister } from 'react-native-event-listeners';

const Stack = createNativeStackNavigator();

const Navigator = () => {


  const [darkMode, setdarkMode] = useState(false);

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
      <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Drawer' screenOptions={{ gestureEnabled: false }}>
          <Stack.Screen options={{headerShown: false }}  name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen options={{headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{headerShown: false }} name="Drawer" component={DrawerScreen} />
          <Stack.Screen options={{headerShown: false }} name="Mehr" component={MehrScreen} />
          <Stack.Screen options={{headerShown: false }} name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </themeContext.Provider>
    )
  }else{
    return (
      <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Drawer' screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen options={{headerShown: false }}  name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen options={{headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false }} name="Drawer" component={DrawerScreen} />
        <Stack.Screen options={{headerShown: false }} name="Mehr" component={MehrScreen} />
        <Stack.Screen options={{headerShown: false }} name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </themeContext.Provider>
    )
  }
}

export default Navigator;