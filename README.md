# Projeto agenda com express, mongoDB e nodeJS

Para colocar em prática os conteudos de node, express e mongoDB do curso de JavaScript e Typescript do professor Luiz Otávio Miranda da Udemy, foi proposto o projeto Agenda. O projeto trabalha com front-end utilizando ejs e o framework bootstrap e back-end, utilizando o framework express, nodeJS e banco de dados NOSQL mongoDB.

O projeto consiste em uma agenda com sistema de login:
- Os usuários devem primeiramente registrar e após isso podem logar com email e senha colocados no cadastro
- Cada usuário pode cadastrar, editar e remover contatos.
- Conta com verificações padrões dos dados dos formulários tanto no front-end como no back-end.
- Listagem de contatos com cada usuário possuindo sua própria agenda.

Além disso, fiz o deploy da aplicação através da criação de uma máquina virtual na Google Cloud Platform
- Configurado chaves SSH no servidor com git bash
- Foi criado um servidor web com NGINX para fazer proxy reverso com Node
- Foi utilizado o pm2
- Nessa máquina, tinha um repositório e outra pasta que recebia dele o código fonte e suas alterações, essa era a pasta usada para o deploy da aplicação.
- O protocolo teve que ser HTTP pois eu não tinha dominio próprio para o site.

Além disso, npm e webpack também foram utilizados.

Abaixo, segue instruções para colocar o projeto em funcionamento localmente para fins de demonstração.

- Possuir banco de dandos criado no mongoDB
- Criar um arquivo .env na pasta do projeto com CONECTIONSTRING="link que será dado pelo próprio mongoDB onde será preenchido senha de acesso e nome do projeto no DB"
- Possuir node instalado e no terminal Windows/Linux entrar na pasta do projeto
- Executar no terminal npm install
- Executar npm run start e após isso npm run dev
- OBS: caso queira utilizar HTTPS quando fazer deploy da aplicação, retire as barras de comentário no server.js para as linhas que possuem o helmet