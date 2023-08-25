import React, { useState } from "react";
import styled from "styled-components";
import api from "../Componentes/services/api";

const PesquisaContainer = styled.section`
  text-align: center;
  justify-content: center;
  align-items: center;
  background: rgb(4, 82, 4);
  background: linear-gradient(
    90deg,
    rgba(4, 82, 4, 1) 28%,
    rgba(4, 107, 4, 1) 59%,
    rgba(6, 146, 6, 1) 88%,
    rgba(9, 163, 9, 1) 100%,
    rgba(7, 169, 7, 1) 100%
  );
  height: 100vh;
  width: 100%;
  color: #fff;
  padding-top: 70px;
`;

const Titulo = styled.h2`
  width: 100%;
  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-family: Arial, Helvetica, sans-serif;
  }
`;
const Subtitulo = styled.h3`
  margin-bottom: 40px;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-family: Arial, Helvetica, sans-serif;
  }
`;
const Form = styled.form`
  padding: 20px;
`;

const Input = styled.input`
  color: Black;
  font-size: 20px;
  width: 28%;
  padding: 20px 10px 20px;
  text-align: center;
  background-color: White;
  border: none;
  margin-right: 15px;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-top: 10px;
  }
`;

const Botao = styled.button`
  padding: 13px 26px;
  background-color: #13b418;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  font-size: 21px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  margin-top: 10px;
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
`;

function Cadastro() {
  const [nome, setNome] = useState("");
  const [situacao, setSituacao] = useState("");
  const [data, setData] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const clienteData = {
      nome,
      situacao,
      data,
    };

    try {
      const response = await api.post("/clientes", clienteData);
      console.log("Cliente cadastrado:", response.data);
      setMensagem("Cliente cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      setMensagem("Erro ao cadastrar cliente. Por favor, tente novamente.");
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
      {mensagem && <p>{mensagem}</p>}
    </PesquisaContainer>
  );
}

export default Cadastro;
