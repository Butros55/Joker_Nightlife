import { Image } from 'expo-image';
import {
    Colors,
    StyledContainer,
    Wrapper,
    Joker_Logo_Big,
  } from '../components/styles';

const HomeScreen = () => {
    return(
        <Wrapper>
            <StyledContainer>
                <Joker_Logo_Big
                    source={'./../assets/pictures/ok.png'}
                />
            </StyledContainer>
        </Wrapper>
    );
};

export default HomeScreen;