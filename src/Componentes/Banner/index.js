import styled from 'styled-components';
import principal from '../../Imagens/principal.png';
import principalMobile from '../../Imagens/principalMobile.png'
import React from 'react';

const Slider = styled.div`
    width:100%;
    max-height:600px;

`
const Imagem = styled.img`
    width:100%;
    object-fit:cover;
`
const ImagemMobile = styled.source`
    height:350px;

`
const Picture = styled.picture`
background: rgb(237,237,237);
background: linear-gradient(90deg, rgba(237,237,237,1) 0%, rgba(235,238,235,1) 100%); 
`

function Carossel(){
    return(
    <Slider>
        <Picture>
            <ImagemMobile media="(max-width: 768px)" srcSet={principalMobile} />
            <Imagem src={principal} alt='Banner'/>
        </Picture>
    </Slider>
    )
}

export default Carossel;