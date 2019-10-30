const db = require('../config/Database');

const Pessoa = db.sequelize.define('pessoa', {
    nome: {
      type: db.Sequelize.STRING,
      allowNull: false
    },
    email: {
        type: db.Sequelize.STRING
    },
    estado: {
        type: db.Sequelize.STRING
    },
    cidade: {
        type: db.Sequelize.STRING
    }
});

module.exports = Pessoa;