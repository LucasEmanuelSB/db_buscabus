const Sequelize = require("sequelize");
const { foreign_key } = require("inflection");

class Adresses extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        country:{
          type: Sequelize.STRING,
          allowNull: false, 
        },
        uf:{
          type: Sequelize.CHAR(2),
          allowNull: false, 
        },
        city:{
          type: Sequelize.STRING,
          allowNull: false, 
        },
        neighborhood:{
          type: Sequelize.STRING,
          allowNull: false, 
        },
        street:{
          type: Sequelize.STRING,
          allowNull: false, 
        },
        cep:{
          type: Sequelize.INTEGER,
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

  static associate(models){
    this.hasOne(models.bus_stops, {
      sourceKey: "id_adress",
      as: "adress",
    });
}
}
module.exports = Adresses;
