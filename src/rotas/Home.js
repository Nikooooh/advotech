import styled from 'styled-components';
import Banner from '../Componentes/Banner';
import Footer from '../Componentes/Footer';


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(237,237,237);
  background: linear-gradient(90deg, rgba(237,237,237,1) 0%, rgba(235,238,235,1) 100%); 
  @media screen and (max-width: 768px) {
    height: 840px;
  }
`

function Home() {
  return (
    <AppContainer>
      <Banner/>
      <Footer/>
    </AppContainer>
  );
}

export default Home;