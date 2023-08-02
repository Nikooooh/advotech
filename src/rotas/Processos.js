import styled from 'styled-components';
import Input from '../Componentes/Input';

const PesquisaContainer = styled.section`
    text-align: center;
    justify-content:center;
    align-items:center;
    background: rgb(4,82,4);
    background: linear-gradient(90deg, rgba(4,82,4,1) 28%, rgba(4,107,4,1) 59%, rgba(6,146,6,1) 88%, rgba(9,163,9,1) 100%, rgba(7,169,7,1) 100%); 
    height:700px;
    width: 100%;
    color: #FFF;
    padding-top:70px;
`
const Titulo = styled.h2`
    width: 100%;
    font-size: 40px;
`
const Subtitulo = styled.h3`
    margin-bottom: 40px;
    font-size: 20px;
`
const Botao = styled.button`
    padding: 14px 28px;
    background-color: #13b418;
    color: #fff;
    display:flex;
    margin-left:683px;
    margin-top:27px;
    border: 5px outset white;
    border-radius: 6px;
    font-size:21px;
    font-family: URW Chancery L, cursive;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        margin-left:129px;
      }
`

function Processos(){
    return(
        <PesquisaContainer>
            <Titulo> Consulte o andamento do seu processo</Titulo>
            <Subtitulo> De forma simples e rápida! </Subtitulo>
            <Input placeholder="Digite o seu nome completo"/>
            <Botao type="submit">Pesquisar</Botao>
        </PesquisaContainer>   
    )
}

export default Processos;