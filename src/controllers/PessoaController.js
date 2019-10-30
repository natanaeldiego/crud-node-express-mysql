const Pessoa = require('../models/Pessoa');

module.exports = {

    async index(req, res) {
      await Pessoa.findAll({ order: [['id', 'DESC']] }).then(result => {
          console.log(JSON.stringify(result))
          return res.json(result);
      });
    },

    async store(req, res) {
      await Pessoa.create({
        nome: req.body.nome,
        email: req.body.email,
        estado: req.body.estado,
        cidade: req.body.cidade
      }).then(function () {
        return res.send('Cadastro realizado com sucesso!');
      }).catch(function (erro) {
        return res.send('Houve um erro: ' + erro);
      });
    },

    async update(req, res) {
      Pessoa.update({ nome: req.body.nome }, {
        where: {
          id: req.body.id
        }
      }).then(() => {
        return res.send('Nome atualizada com sucesso!');
      }).catch(function (erro) {
        return res.send('Houve um erro: ' + erro);
      });
    },

    async delete(req, res) {
      await Pessoa.destroy({
        where: { id: req.body.id }
      }).then(function () {
        return res.send('Pessoa excluída com sucesso!');
      }).catch(function (erro) {
        return res.send('Houve um erro: ' + erro);
      });
    }
}