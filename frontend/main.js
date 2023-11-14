import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Contato from './modules/Contato';

const login = new Login('.form-login','login');
const cadastro = new Login('.form-cadastro','cadastro','cadastro');
const editaContato = new Contato('.form-edita-cadastro');
const registraContato = new Contato('.form-cria-cadastro');

login.init();
cadastro.init();
editaContato.init();
registraContato.init();

//import './assets/css/styles.css';