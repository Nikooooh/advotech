import styled from 'styled-components';

const FooterContainer = styled.footer`
    width:100%;
    align-items:center;
    justify-content:center;
    text-align:center;
    height:412px;
    background: rgb(249,251,249);
    background: linear-gradient(90deg, rgba(249,251,249,1) 0%, rgba(245,247,245,1) 0%, rgba(227,228,227,1) 100%); 
`
const Titulo = styled.h1`
    font-family:Arial, Helvetica, sans-serif;
    font-size:20px;
    font-weight: bolder;
    color: #363636;
`
const Informacoes = styled.p`
    font-size:16px;
`

const Mapa = styled.iframe`
    display:flex;
    width:500px; 
    height:250px;
    style="border:0;" 
    allowfullscreen=""
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade";
    margin-left:512px;
 

`


function Footer(){
    return(
    <FooterContainer>
        <Titulo>Informações de contato e Localização</Titulo>
        <Informacoes>Telefone: (44) 98804-7030</Informacoes>
        <Informacoes>Endereço: R. Luís Spigolon, 1682 - Centro - Paranavaí-PR</Informacoes>
        <Mapa src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5118053439355!2d-52.4571434!3d-23.078353099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9492967d55201bc7%3A0x75eb2623e0d9b7b9!2sR.%20Lu%C3%ADs%20Spigolon%2C%201682%20-%20Centro%2C%20Paranava%C3%AD%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1690828261139!5m2!1spt-BR!2sbr" 
        ></Mapa>
        <Informacoes> © 2023 Advogado Alecio Trevisan - Todos os direitos reservados.</Informacoes>
</FooterContainer>
    )
}

export default Footer;