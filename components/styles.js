import { View, Text } from 'react-native';
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

export const Joker_Logo_Big = styled.Image`
    alignContent: center;
    width: 80%;
    height: 10%;
    position: absolute;
    top: 20%;
    tintColor: white;
`;

