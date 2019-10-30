const express = require('express');
const PessoaController = require('./controllers/PessoaController');
const routes = express.Router();

routes.get('/pessoa', PessoaController.index);
routes.post('/pessoa', PessoaController.store);
routes.put('/pessoa', PessoaController.update);
routes.delete('/pessoa', PessoaController.delete);

module.exports = routes;