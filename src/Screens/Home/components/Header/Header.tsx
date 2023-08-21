import styled from "styled-components/native";
import {Image} from "react-native";

const Wrapper = styled.View`
  height: 140px;
  padding-top: 20px;
  background-color: ${({theme})=> theme.neutralColor7};
  justify-content: center;
  align-items: center;
`

const Img = styled.Image`
    height: 50%;
    object-fit: scale-down;
`

function Header() {
    return (
        <Wrapper>
            <Img source={require('../../../../assets/logo.png')}/>
        </Wrapper>
    );
}

export default Header;

