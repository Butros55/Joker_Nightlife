import { View, Text, Keyboard } from 'react-native'
import React from 'react'
import firebase from './firebaseConfig'
import { useState } from 'react'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler'
import { Button } from '@rneui/themed';

const AddData = () => {
    const userDataRef = firebase.firestore().collection('userData')
    const [addData, setddData] = useState({
        vorname: '',
        nachname : '',
        handynummer: ''
    });

    // add new field
    const addField = () => {
        //check if we have new field data
        if (addData) {
            const data = {
                vorname: addData.vorname,
                nachname : addData.nachname,
            };
            console.log(addData.vorname)
            console.log(addData.nachname)
            userDataRef
                    .add(data)
                    .then(() => {
                        // release the new field state
                        setddData('');
                        //release Keyboard
                        Keyboard.dismiss();
                    })
                    .catch((error) => {
                        // show an alert
                        console.log(error)
                    })
        } else {
            console.log('else')
        }
    }
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <TextInput
                onChangeText={(vorname) => setddData({...addData,vorname: vorname})}
                value={addData.vorname}
                textAlign='left'
                placeholder='test'
                style={{width: 120, alignSelf: 'center', paddingRight: 20, color: 'black', top: '50%'}}
            />
            <TextInput
                onChangeText={(nachname) => setddData({...addData,nachname: nachname})}
                value={addData.nachname}
                textAlign='left'
                placeholder='test'
                style={{width: 120, alignSelf: 'center', paddingRight: 20, color: 'black', top: '50%'}}
            />
            <View style={{height: 300, justifyContent: 'flex-end'}}>
                <Button
                    style={{top: '10%'}}
                    type='clear'
                    onPress={addField}
                >
                    <Text>upload</Text>
                </Button>
            </View>
        </GestureHandlerRootView>
    )
}

export default AddData