import logo from '../../Imagens/Logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display:flex;
`
const ImagemLogo = styled.img`
  widht:120px;
  height:120px;
  margin-top:5px;
  cursor: pointer;
`
function Logo(){
    return(
        <LogoContainer>
            <ImagemLogo src={logo} alt="Logotipo"></ImagemLogo>
        </LogoContainer>
    )
}

export default Logo;