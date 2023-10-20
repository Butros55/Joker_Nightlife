import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';
import { Image } from 'expo-image';
import { Video } from 'expo-av';


//Colors
export const Colors = {
    primary: '#ffffff'
};

const { primary } = Colors;


//Views
 export const StyledContainer = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    backgroundColor: black;
`;

export const Wrapper = styled.View`
    flex: 1;
`;

// Buttons
export const LoginWithEmailButton = styled.TouchableOpacity`
    textAlign: center;
    position: absolute;
    top: 89%;
`;

export const InputContainer_login = styled.View`
    alignSelf: center;
    width: 80%;
    top: 20%;
`;

export const InputContainer_register = styled.View`
    alignSelf: center;
    width: 80%;
    top: 20%;
`;

export const ButtonContainer_start = styled.View`
    width: 70%;
    top: 8.5%;
    alignItem: center;
`;

export const ButtonContainer_login = styled.View`
    width: 75%;
    top: 70%;
    alignItem: center;
`;

//Panels
export const Panel_Up = styled.KeyboardAvoidingView`
    backgroundColor: rgba(255, 255, 255, 1);
    flex: 1;
    alignItems: center;
    alignContent: center;
`;



//kann wieder weg!!
export const Test = styled.Image`
    alignContent: center;
    width: 80%;
    height: 70%;
    position: absolute;
`;