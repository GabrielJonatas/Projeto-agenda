require('dotenv').config(); // referente as variaveis de ambiente, dados que não devem ser mostrado para outros dev
// Utilizamos o env para esconder usuário e senha da base de dados dos arquivos que serão comitados no GitHub
const express = require('express');
const app = express(); // Iniciar express
const mongoose = require('mongoose'); // modelar a base de dados e garantir que os dados que salvamos na base de dados são dados que queremos salvar 
mongoose.connect(process.env.CONECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));
const session = require('express-session'); // Sessões são para identificar o navegador do cliente, salvamos o cookie com o id do cliente
const MongoStore = require('connect-mongo'); // Sessões são salvas na base de dados
const flash = require('connect-flash'); // Mensagens auto destrutivas salvas na sessão
const routes = require('./routes');  // rotas da aplicação
const path = require('path');
//const helmet = require('helmet'); // segurança da aplicação
const csrf  = require('csurf'); // csrf token para formulários, impedindo que sites externos consigam postar dentro da aplicação
const { middleWareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

// middlewares são funções executadas durante a rota

//app.use(helmet());

app.use(express.urlencoded({extended: true})); // necessário para tratar o body das requisições
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'public'))); // arquivos estáticos que podem ser acessados diretamente

const sessionOptions = session({ // configuração de sessão
    secret: 'mda ndadjandajdnejwn ()',
    store: MongoStore.create({mongoUrl: process.env.CONECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24*7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); // arquivos que são renderizados na tela
app.set('view engine', 'ejs'); // engine utilizada

app.use(csrf()); // configurar csrf

// Nossos próprios middlewares
app.use( middleWareGlobal);
app.use( checkCsrfError );
app.use( csrfMiddleware );

app.use(routes); // chamando as rotas

app.on('pronto', () => { // começar a ouvir requisições
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});