import styled from 'styled-components';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  height: 130px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    height: 130px;
  }
`

function Header(){
    return(
    <HeaderContainer>
        <Link to="/">
          <Logo/>
        </Link>
        <OpcoesHeader>
        </OpcoesHeader>
    </HeaderContainer>
    )
}

export default Header;