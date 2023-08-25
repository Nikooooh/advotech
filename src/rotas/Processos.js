import styled from 'styled-components';
import Input from '../Componentes/Input';
import React, { useState } from 'react';
import api from '../Componentes/services/api';

const PesquisaContainer = styled.section`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center; 
    background: rgb(4,82,4);
    background: linear-gradient(90deg, rgba(4,82,4,1) 28%, rgba(4,107,4,1) 59%, rgba(6,146,6,1) 88%, rgba(9,163,9,1) 100%, rgba(7,169,7,1) 100%); 
    height: 100vh;
    width: 100%;
    color: #FFF;
    padding-top: 60px;
`

const Titulo = styled.h2`
    width: 100%;
    font-size: 40px;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
        font-family:Arial, Helvetica, sans-serif;
      }
`
const Subtitulo = styled.h3`
    text-align: center;  
    margin-bottom: 30px;
    font-size: 20px;
    @media screen and (max-width: 768px) {
        font-family: Arial, Helvetica, sans-serif;
    }
`
const Botao = styled.button`
    padding: 13px 26px;
    background-color: #13b418;
    color: #ffffff;
    border: none;
    border-radius: 25px; 
    font-size: 21px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);  
    transition: all 0.3s; 
    margin-top: 30px;
    width: fit-content;
    margin: 20px auto 0;

    &:hover {
        background-color: #10a015;
        box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-3px);
    }

    &:active {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transform: translateY(2px);
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
        margin-top: 25px; 
    }
`


function Processos(){

    
        const [nomePesquisa, setNomePesquisa] = useState('');
        const [resultados, setResultados] = useState([]);
    
        const handleBuscar = async () => {
            try {
                const response = await api.get(`/clientes/buscar/${nomePesquisa}`);
                setResultados(response.data);
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
            }
        };
    
    return(
        <PesquisaContainer>
            <Titulo> Consulte o andamento do seu processo</Titulo>
            <Subtitulo> De forma simples e rápida! </Subtitulo>
              <Input
                placeholder="Digite o nome para buscar"
                value={nomePesquisa}
                onChange={(e) => setNomePesquisa(e.target.value)}
              />
            <Botao type="button" onClick={handleBuscar}>Buscar</Botao>
            
            
            {resultados.map((cliente) => (
                <div key={cliente._id}>
                    <p>Nome: {cliente.nome}</p>
                    <p>Situação: {cliente.situacao}</p>
                    <p>Data da entrada no processo: {cliente.data.substr(0,10)}</p>
                </div>
            ))}
        </PesquisaContainer>   
    )
}

export default Processos;