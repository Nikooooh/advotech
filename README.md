<h1> <strong> Documentação do Projeto Advotech  </strong> </h1>
  
Bem-vindo à documentação oficial do projeto Advotech. Aqui você encontrará informações detalhadas sobre o funcionamento, uso e suporte do sistema Advotech, uma plataforma projetada para simplificar a consulta de andamento de processos jurídicos.   

<h2><strong> Propósito e Visão </strong></h2>

O Advotech foi desenvolvido com o propósito fundamental de tornar a consulta do andamento de processos jurídicos mais fácil e acessível. A visão é proporcionar aos clientes a capacidade de acompanhar seus processos de maneira independente, sem a necessidade de contato direto com o advogado responsável. O diferencial do Advotech está na apresentação simplificada do andamento do processo, permitindo que pessoas sem conhecimento jurídico entendam claramente a fase atual do processo.   

<h2><strong> Funcionalidades Principais </strong> <br/> </h2>

•	Consulta de Processos: Os clientes podem realizar consultas sobre processos jurídicos públicos através de seu próprio nome completo. O advogado responsável insere manualmente os resumos simplificados do processo.   
•	Linguagem Jurídica Simplificada: Todos os resumos dos processos são apresentados em uma linguagem clara e de fácil compreensão, especialmente elaborada para leigos no assunto.   

<h2><strong> Tecnologias Utilizadas <br/></h2>
O Advotech foi desenvolvido utilizando as seguintes tecnologias:  </strong> 

•	Frontend: React JS   
•	Backend: Node JS, Express   
•	Banco de Dados: MongoDB   
•	Comunicação: Axios   
•	Deploy: Heroku <br/>
•	Controle de Versão: GIT, GITHUB   
•	Testes: Cypress  

<h2><strong> Arquitetura <br/></h2>
A arquitetura do Advotech é baseada em um modelo cliente-servidor, com os seguintes componentes: </strong>

•	Cliente (Navegador do Usuário): Os usuários acessam o website através de seus navegadores.   
•	Servidor Web (Node.js + Express): O servidor gerencia as solicitações dos clientes, processa as consultas e interage com o banco de dados.   
•	Banco de Dados (MongoDB): As informações sobre processos e resumos são armazenadas e gerenciadas no MongoDB.   
•	Comunicação (Axios): Facilita a comunicação entre o cliente e o servidor para buscar dados de processos.   

<h2><strong> Uso </strong> <br/></h2>

•	www.aleciotrevisan.com.br/processos – nesse diretório, o cliente conseguirá realizar consultas do andamento do processo quando digitado o nome do cliente completo que foi previamente cadastrado no diretório /cadastro.  
•	www.aleciotrevisan.com.br/cadastro - nesse diretório, você conseguirá cadastrar um cliente que irá persistir no banco de dados. Para consultar o cliente, basta ir ao diretório /processos e pesquisar o nome completo do cliente que você cadastrou.  
•	www.aleciotrevisan.com.br/clientes - nesse diretório, terá a lista de todos os clientes que foram cadastrados, além disso, terá um botão com a opção de excluir o cliente desejado, o que resultará na exclusão no banco de dados também.  
•	www.aleciotrevisan.com.br/contato - nesse diretório, o usuário conseguirá enviar uma mensagem de contato para o responsável pelo site.  
•	www.aleciotrevisan.com.br/sobre - nesse diretório, terá um pouco sobre a trajetória do advogado em questão.

<h3><strong> Nota: Os clientes devem ser cadastrados manualmente pelo advogado responsável antes de utilizar a funcionalidade de consulta.   </h3>

<h3>Importante: Por se tratar de uma aplicação que tem como objetivo fazer parte de um portifólio, a aplicação não possui métodos de autenticação para que usuários possam cadastrar e excluir clientes do banco de dados. Desse modo, a intenção é implementar a autenticação via JWT na próxima versão do website. </h3>

<h2>Suporte  </strong> <br/></h2>
Para obter suporte, os usuários podem acessar a seção "CONTATO" no site e preencher o formulário de contato.    

<h2> <strong> Licença  </strong><br/></h2>
O Advotech é licenciado sob a autoria de Nicolas Trevisan.   

 <h2><strong> Notas de Versão 1.0.0  </strong> <br/></h2>
 
•	Lançamento inicial do Advotech.   
•	Funcionalidade básica de consulta de processo implementada.   
•	Resumos de processo podem ser inseridos e atualizados pelos advogados.  

Este é um guia introdutório para o projeto Advotech. Caso precise de mais detalhes ou informações específicas, não hesite em me contatar.    
Todo o código está disponível no meu <strong> GitHub </strong>.
