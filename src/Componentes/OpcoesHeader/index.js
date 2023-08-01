import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Opcoes = styled.ul`
  display:flex;
  @media screen and (max-width: 768px) {
    flex-direction: column; /* Empilhar as opções verticalmente em telas menores */
    align-items: center; /* Centralizar as opções horizontalmente em telas menores */
  }
`
const Opcao = styled.li`
  min-width: 120px;
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor:pointer;
  font-family:Arial, Helvetica, sans-serif;
  font-size:18px;
  font-weight: bolder;
  color: #0A2A12;
  &:hover {
    background-color: #09bd54;
    border-radius: 40px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px; /* Adicionar um espaço entre as opções empilhadas verticalmente */
    width: 100%; /* Ocupar toda a largura disponível em telas menores */
    border-radius: 40px; /* Arredondar as bordas para cada opção em telas menores */
    text-align: center; /* Centralizar o texto das opções em telas menores */
    font-size:11px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bolder;
  }
`

const TextoOpcoes = [ 'SOBRE', 'PROCESSOS', 'CONTATO']


function OpcoesHeader() {
    return(
        <Opcoes>
        {TextoOpcoes.map( (texto) => (
          <Link to={`/${texto.toLowerCase()}`}> <Opcao>{texto}</Opcao> </Link>
          ))} 
        </Opcoes>
    )
}

export default OpcoesHeader;