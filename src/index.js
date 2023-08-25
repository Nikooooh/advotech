import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Componentes/Header";
import Home from "./rotas/Home";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./rotas/Sobre";
import ContactFormulario from "./rotas/Contato";
import Processos from "./rotas/Processos";
import Obrigado from "./rotas/Obrigado";
import Cadastro from "./rotas/Cadastro";
import ListaClientes from "./rotas/ListaClientes";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family:Arial, Helvetica, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    code {
      font-family: font-family:Arial, Helvetica, sans-serif;
}
    li {
      list-style: none;
    }

    a {
      text-decoration:none;
    }
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<ContactFormulario />} />
        <Route path="/processos" element={<Processos />} />
        <Route path="/obrigado" element={<Obrigado />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/clientes" element={<ListaClientes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
