import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  @media screen and (max-width: 768px) {
    font-family:Arial, Helvetica, sans-serif;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #3498db;
`;

function ThankYouPage() {
  return (
    <Container>
      <Title>Obrigado pelo seu Contato!</Title>
      <p>Estamos felizes por você ter entrado em contato conosco. Sua mensagem é muito importante para nós.</p>
      <p><Link href="https://aleciotrevisan.com.br">Clique aqui</Link> para retornar à página principal.</p>
    </Container>
  );
}

export default ThankYouPage;
