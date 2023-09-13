import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { removeItem } from '../components/asyncStorage'
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
//styles
import {
    ButtonContainer_login
  } from '../components/styles';

const Home = () => {

    const navigation = useNavigation();

    const resetAsync = async () => {
        await removeItem('onboarded');
        navigation.push('Onboarding');
    }
    

  return (
    <View style={{ alignItems: 'center', top: '45%'}}>
        <ButtonContainer_login>
            <Button
            onPress={() => { resetAsync() }}
            buttonStyle={styles.button}
            title='Reset AsyncStorage'
            >
            </Button>
        </ButtonContainer_login>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

    button: {
        height: 45,
        backgroundColor: 'rgba(0, 48, 135, 1)',
        borderRadius: 25
      },

})