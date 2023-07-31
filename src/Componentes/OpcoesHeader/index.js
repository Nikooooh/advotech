import styled from 'styled-components';

const Opcoes = styled.ul`
  display:flex;
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
  font-size:20px;
  font-weight: bolder;
  color: #0A2A12;
`

const TextoOpcoes = [ 'SOBRE', 'PROCESSOS', 'CONTATO']

function OpcoesHeader() {
    return(
        <Opcoes>
            {TextoOpcoes.map( (texto) => <Opcao>{texto}</Opcao>)}
        </Opcoes>
    )
}

export default OpcoesHeader;