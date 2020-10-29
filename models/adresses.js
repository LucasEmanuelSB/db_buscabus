const Sequelize = require("sequelize");	

class Adresses extends Sequelize.Model {	
  static init(sequelize) {	
    super.init(	
      {	
        id: {	
          type: Sequelize.INTEGER,	
          autoIncrement: true,	
          primaryKey: true,	
        },	
        country: {	
          type: Sequelize.STRING,	
          allowNull: false,	
        },	
        uf: {	
          type: Sequelize.STRING,	
          allowNull: false,	
        },	
        city: {	
          type: Sequelize.STRING,	
          allowNull: false,	
        },	
        neighborhood: {	
          type: Sequelize.STRING,	
          allowNull: false,	
        },	
        street: {	
          type: Sequelize.STRING,	
          allowNull: false,	
        },	
        cep: {	
          type: Sequelize.STRING,	
          allowNull: false,	
        },	
        number: {	
          type: Sequelize.STRING,	
          allowNull: false,	
        },	
      },	
      {	
        freezeTableName: true,	
        timestamps: false,	
        sequelize,	
        modelName: "adresses",	
      }	
    );	

    return this;	
  }	

}	
module.exports = Adresses;
