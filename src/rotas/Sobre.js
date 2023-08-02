import styled from 'styled-components';


const AppContainer = styled.div`
  width: 100vw;
  height:100vh;
  padding:21px; 
  background: rgb(237,237,237);
  background: linear-gradient(90deg, rgba(237,237,237,1) 0%, rgba(235,238,235,1) 100%);  
  align-items:center;
  justify-content:center;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`
const SobreContainer = styled.section`
  box-shadow: 2px -1px 15px 17px rgba(0, 0, 0, 0.59);
  width: 100%;
  height:580px;
  max-width: 895px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
      margin: 0 auto 20px;
      width:398px;
      margin-right:24px;
    }
`
const Titulo = styled.h1 `
  font-size: 32px;
  margin-top: 7px;
  font-family: Snell Roundhand, cursive;
  text-align: center;
  margin-bottom: 20px;
  color: #363636;
  @media screen and (max-width: 768px) {
  font-size: 24px;
  margin-top: 10px;
  }
`
const TextoSobre = styled.h4`
  font-family: URW Chancery L, cursive;
  padding: 15px;
  font-size: 18px;
  text-align: justify;
  color: #363636;
  @media screen and (max-width: 768px) {
  font-size: 12px;
  padding: 10px;
  }
`
const Infos = styled.p`
  margin: 20px auto;
  text-align: center;
  font-size: 12px;
  margin-top:35px;
  @media screen and (max-width: 768px) {
  font-size: 10px;
  margin: 10px auto;
  }
`


function Sobre() {
    return (
      <AppContainer>
        <Titulo>Sobre Alecio Trevisan</Titulo>
        <SobreContainer>
          <TextoSobre>Olá, sou Alecio Trevisan, um dedicado e experiente advogado com uma sólida trajetória de mais de 30 anos de atuação na
             área previdenciária. Minha paixão pela justiça e meu compromisso com o bem-estar dos meus clientes me levaram a uma 
             carreira enriquecedora, focada em garantir que os direitos previdenciários sejam devidamente reconhecidos e defendidos.
            Minha jornada profissional tem sido pautada pela busca incessante pelo conhecimento e aprimoramento constante. Desde 
            o início da minha carreira, tenho me empenhado em compreender as nuances complexas das leis previdenciárias, mantendo-me atualizado 
            sobre as mudanças legislativas e jurisprudenciais que afetam diretamente os benefícios previdenciários.
            Ao longo dos anos, tive a honra de auxiliar uma diversidade de clientes em Paranavaí e em toda a região.
            Meu compromisso em oferecer um atendimento personalizado e empático é uma das minhas marcas registradas. Entendo que cada caso 
            é único e requer uma abordagem individualizada. Trabalho incansavelmente para esclarecer dúvidas, oferecer
           orientações claras e construir estratégias jurídicas sólidas que atendam às necessidades específicas de cada cliente.
            Minha expertise abrange uma ampla gama de questões previdenciárias, incluindo aposentadorias, pensões, 
            auxílios, revisões de benefícios e muito mais. Minha abordagem transparente e honesta permite que meus clientes compreendam plenamente
             suas opções legais e tomem decisões 
            informadas sobre o seu futuro previdenciário.
            Além do compromisso com meus clientes individuais, também dedico parte do meu tempo ao compartilhamento de 
            conhecimento. Já ministrei palestras e workshops em Paranavaí e região, visando educar as pessoas sobre seus
            direitos previdenciários e capacitar indivíduos a tomar decisões informadas sobre seus benefícios.</TextoSobre>
        </SobreContainer>
        <Infos>© 2023 Advogado Alecio Trevisan - Todos os direitos reservados.</Infos>
      </AppContainer>
    );
  }
  
  export default Sobre;