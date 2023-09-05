import React from 'react';
import {
    Test,
    StyledContainer,
    Wrapper,
  } from '../components/styles';

import test from '../assets/pictures/ok.png'

const HomeScreen = () => {
    return(
        <Wrapper>
            <StyledContainer>
                <Test
                    source={test}
                />
            </StyledContainer>
        </Wrapper>
    );
};

export default HomeScreen;