import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getItem } from '../components/asyncStorage';

//screens
import LoginScreen from './../screens/Login';
import OnboardingScreen from './../components/Onboarding';

const Stack = createNativeStackNavigator();

const Navigator = () => {


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
      <NavigationContainer>
        <Stack.Navigator initialRouteName='OnboardingScreen'>
          <Stack.Screen options={{headerShown: false }}  name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen options={{headerShown: false }} name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }else{
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{headerShown: false }}  name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen options={{headerShown: false }} name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default Navigator;