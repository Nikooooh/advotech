import styled from 'styled-components';

const FooterContainer = styled.footer`
    width:100%;
    align-items:center;
    justify-content:center;
    text-align:center;
    height:412px;
    margin-top:0px;
    background: rgb(237,237,237);
    background: linear-gradient(90deg, rgba(237,237,237,1) 0%, rgba(235,238,235,1) 100%); 
    @media screen and (max-width: 768px) {
        height:314px;
        margin-top: 20px;
      }
`
const Titulo = styled.h1`
    font-family:Arial, Helvetica, sans-serif;
    font-size:20px;
    font-weight: bolder;
    color: #363636;


    @media screen and (max-width: 768px) {
        font-size:15px;
        margin-top:5px;
      }
`
const Informacoes = styled.p`
    font-size:16px;
    margin-top:15px;
    @media screen and (max-width: 768px) {
        font-size:9px;
        margin-top:12px;
      }
`
const InformacoesH2 = styled.h2`
    font-size:16px;
    font-family:Arial, Helvetica, sans-serif;
    @media screen and (max-width: 768px) {
        font-size:10px;
        margin-top:8px;
        font-family:Arial, Helvetica, sans-serif;
      }
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
    border-radius: 50%; /* CSS3 */
    -moz-border-radius: 10px; /* Firefox */  
    -webkit-border-radius: 10px; /* Safari, Chrome */
    @media screen and (max-width: 768px) {
        width: 90%;
        height: 200px;
        justify-content:center;
        align-items:center;
        display:flex;
        margin-left:16px;
        margin-top:20px;
      }

`


function Footer(){
    return(
    <FooterContainer>
        <Titulo>Informações de contato e Localização</Titulo>
        <InformacoesH2>Telefone: (44) 98804-7030</InformacoesH2>
        <InformacoesH2>Endereço: R. Luís Spigolon, 1682 - Centro - Paranavaí-PR</InformacoesH2>
        <Mapa src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5118053439355!2d-52.4571434!3d-23.078353099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9492967d55201bc7%3A0x75eb2623e0d9b7b9!2sR.%20Lu%C3%ADs%20Spigolon%2C%201682%20-%20Centro%2C%20Paranava%C3%AD%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1690828261139!5m2!1spt-BR!2sbr" 
        ></Mapa>
        <Informacoes> © 2023 Advogado Alecio Trevisan - Todos os direitos reservados.</Informacoes>
</FooterContainer>
    )
}

export default Footer;