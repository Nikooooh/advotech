import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../Componentes/Footer';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const FormContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    @media (max-width: 768px) {
        max-width: 100%;
    }
  `
  const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
  `
  const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(237,237,237);
    background: linear-gradient(90deg, rgba(237,237,237,1) 0%, rgba(235,238,235,1) 100%); 
    @media screen and (max-width: 768px) {
      height: 840px;
    }
`

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
`
const TextArea = styled.textarea`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`

const Botao = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
const Titulo = styled.h2`
    font-family: URW Chancery L, cursive;
`
  return (
    <AppContainer>
    <FormContainer>
      <Titulo>Entre em Contato</Titulo>
      <ContactForm onSubmit={handleSubmit} className="contact-form">
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextArea
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Botao type="submit">Enviar</Botao>
      </ContactForm>
    </FormContainer>
    <Footer></Footer>
    </AppContainer>
  );
};

export default ContactForm;