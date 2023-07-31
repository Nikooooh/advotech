import styled from 'styled-components';
import principal from '../../Imagens/principal.png';

const Slider = styled.div`
    width:100%;
    height:600px;
`
const Imagem = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
function Carossel(){
    return(
    <Slider>
        <Imagem src={principal} alt='Banner'/>
    </Slider>
    )
}

export default Carossel;