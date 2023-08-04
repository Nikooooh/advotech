import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../Componentes/services/api';


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
`;

const Titulo = styled.h2`
    width: 100%;
    font-size: 40px;
`
const Subtitulo = styled.h3`
    margin-bottom: 40px;
    font-size: 20px;
`
const Form = styled.form`
    padding:20px;
`;

const Input = styled.input`
    color: Black;
    font-size: 20px;
    width: 28%;
    padding: 20px 10px 20px;
    text-align: center;
    background-color: White;
    border: none;
    margin-right:15px;
    border-radius: 20px;
    @media screen and (max-width: 768px) {
        width:80%;
        margin-top:10px;
    }
`;

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
        margin-left:100px;
   `


function Cadastro() {
    const [nome, setNome] = useState('');
    const [situacao, setSituacao] = useState('');
    const [data, setData] = useState('');
    const [, setMensagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const clienteData = {
            nome,
            situacao,
            data
        };

        try {
            const response = await api.post('/clientes', clienteData);
            console.log('Cliente cadastrado:', response.data);
            setMensagem('Cliente cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            setMensagem('Erro ao cadastrar cliente. Por favor, tente novamente.');
        }
    };

    return (
        <PesquisaContainer>
            <Titulo> Cadastre seu cliente</Titulo>
            <Subtitulo> De forma simples e rápida! </Subtitulo>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Digite nome completo do cliente"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Digite a situação do cliente"
                    value={situacao}
                    onChange={(e) => setSituacao(e.target.value)}
                />
                <Input
                    type="date"
                    placeholder="Selecione a data"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                <Botao type="submit">Cadastrar</Botao>
            </Form>
        </PesquisaContainer>
        
    );
}

export default Cadastro;