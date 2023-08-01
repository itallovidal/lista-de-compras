import styled from "styled-components/native";
import {Image} from "react-native";

const WrapperHeader = styled.View`
  height: 20%;
  min-height: 150px;
  background-color: ${({theme})=> theme.neutralColor7};
  justify-content: center;
  align-items: center;
`
function Header() {
    return (
        <WrapperHeader>
            <Image style={{ height: '50%', objectFit: "scale-down"}} source={require('../../../../assets/logo.png')}/>
        </WrapperHeader>
    );
}

export default Header;

