const Sequelize = require('sequelize')
const connection = new Sequelize('db_buscabus', 'postgres', '040797lesb', {
    host: 'localhost',
    dialect: 'postgres',
    dialectOptions: {
      // Your pg options here
    }
  });

connection.authenticate().then(function(){
    console.log("Conectado com sucesso! ")
}).catch(function(erro){
    console.log("Não conectado. Erro: "+erro)
});

module.exports = connection;