import { Joker_Logo_Big, StyledContainer, Wrapper } from "../components/styles";
import { Image } from 'expo-image';
import {
    Colors,
    StyledContainer,
    Wrapper,
    Joker_Logo_Big,
  } from '../components/styles';

const Home = () => {
    return(
        <Wrapper>
            <StyledContainer>
                <Joker_Logo_Big
                    source={'./../assets/pictures/ok.png'}
                />
            </StyledContainer>
        </Wrapper>
    );
}

export default HomeScreen;