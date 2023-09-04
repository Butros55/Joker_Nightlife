import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

//styles
import {
    Wrapper,
    InputContainer,
    ButtonContainer
  } from '../components/styles';


const SignInWithEmail = () => {

    return (
        <Wrapper>
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
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
    
                }
            }
            style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </ButtonContainer>
        </Wrapper>
    )
}

const styles = StyleSheet.create ({

    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        height: 40,
        borderRadius: 10,
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
        backgroundColor: 'rgba(0, 48, 135, 0.9)',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        margin: 4
      },
      
      buttonOutline: {
        backgroundColor: 'white',
      },
      
      buttonOutlineText: {
        tintColor: 'rgb(0, 48, 135)'
      }
});

export default SignInWithEmail;