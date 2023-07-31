import styled from 'styled-components';
import Header from './Componentes/Header';
import Banner from './Componentes/Banner';
import Footer from './Componentes/Footer';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(249,251,249);
  background: linear-gradient(90deg, rgba(249,251,249,1) 0%, rgba(245,247,245,1) 0%, rgba(227,228,227,1) 100%); 
`

function App() {
  return (
    <AppContainer>
      <Header/>   
      <Banner/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
