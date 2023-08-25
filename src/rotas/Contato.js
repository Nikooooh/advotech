import styled from "styled-components";
import Footer from "../Componentes/Footer";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(237, 237, 237);
  background: linear-gradient(
    90deg,
    rgba(237, 237, 237, 1) 0%,
    rgba(235, 238, 235, 1) 100%
  );
  @media screen and (max-width: 768px) {
    height: 840px;
  }
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;
const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Botao = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Titulo = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  @media screen and (max-width: 768px) {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

function ContactFormulario() {
  return (
    <AppContainer>
      <FormContainer>
        <Titulo>Entre em Contato</Titulo>
        <ContactForm
          action="https://formsubmit.co/c3503b52c04b0bc90b48e3321d0a9160"
          method="POST"
        >
          <Input type="text" placeholder="Nome" name="name" required />
          <Input type="email" placeholder="E-mail" name="email" required />
          <input
            type="hidden"
            name="_next"
            value="https://aleciotrevisan.com.br/obrigado"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <TextArea name="message" placeholder="Mensagem" required />
          <Botao type="submit">Enviar</Botao>
        </ContactForm>
      </FormContainer>
      <Footer></Footer>
    </AppContainer>
  );
}

export default ContactFormulario;
