const validator = require('validator');
const Contato = require('../models/ContatoModel');

exports.index = async (req,res) => {
        let email = '';
        if(req.session.user) email = req.session.user.email;
        const contatos = await Contato.buscaContatos(email);
        res.render('index', {contatos});
};
