import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import joker_logo from './../assets/pictures/logo.png';

//styles
import {
    Joker_Logo_Big,
    Wrapper,
    InputContainer,
    ButtonContainer,
    StyledContainer
  } from '../components/styles';


const SignInWithEmail = () => {

  const video = React.useRef(null);

    return (
        <Wrapper>
        <StyledContainer>

        <Video
          ref={video}
          style={styles.video}
          source={
            require('./../assets/videos/login_video.mp4')
          }
          resizeMode={ResizeMode.CONTAIN}
          isLooping={true}
          isMuted={true}
          shouldPlay={true}
        />

          <InputContainer>
            <TextInput
                placeholder='Email oder Handynummer'
                style={styles.input}
                
                />
            <TextInput 
                placeholder='Password'
                style={styles.input}
                secureTextEntry
                />
            </InputContainer>

            <ButtonContainer>
                <TouchableOpacity
                onPress={() => {
                    
                }
              }
              style={styles.button}
              >
                <Text style={styles.buttonText}>Anmelden</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                  
                }
              }
              style={[styles.button, styles.buttonOutline]}
              >
                <Text style={styles.buttonOutlineText}>Registrieren</Text>
                </TouchableOpacity>
            </ButtonContainer>

            <Joker_Logo_Big
              source={joker_logo}
            />

        </StyledContainer>
        </Wrapper>
    )
}

const styles = StyleSheet.create ({

    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        height: 40,
        borderRadius: 32,
        margin: 4,
        paddingLeft: 10,
        fontSize: 20,
      },
      
      buttonText: {
        color: 'white',
      },
      
      button: {
        width: '100%',
        height: 45,
        backgroundColor: 'rgba(0, 48, 135, 0.7)',
        alignItems: 'center',
        padding: 15,
        borderRadius: 32,
        margin: 4
      },
      
      buttonOutline: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderColor: 'rgb(0, 48, 135)',
        borderWidth: 1,
      },
      
      buttonOutlineText: {
        color: 'rgb(0, 48, 135)',
        height: 20
      },

      video: {
        flex: 1,
        width: '390%',
        opacity: 0.6
      },
});

export default SignInWithEmail;