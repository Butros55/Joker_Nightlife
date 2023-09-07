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

export const InputContainer = styled.View`
    position: absolute;
    width: 100%;
    top: 100%;
    alignItem: center;
    alignContent: center;
`;

export const ButtonContainer_start = styled.View`
    position: absolute;
    width: 60%;
    top: 9%;
    alignItem: center;
`;

export const ButtonContainer_login = styled.View`
    position: absolute;
    width: 60%;
    top: 50%;
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