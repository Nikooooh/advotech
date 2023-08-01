import logo from '../../Imagens/Logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display:flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
      justify-content:center;
      display:flex;
      align-items: center;
    }
`
const ImagemLogo = styled.img`
  widht:120px;
  height:120px;
  margin-top:5px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 100px; /* Reduzir o tamanho da imagem em telas menores */
    height: 80px;
    justify-content:center;
    display:flex;
    align-items: center;
    margin-top:10px;
  }
`
function Logo(){
    return(
        <LogoContainer>
            <ImagemLogo src={logo} alt="Logotipo"></ImagemLogo>
        </LogoContainer>
    )
}

export default Logo;