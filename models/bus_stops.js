const Sequelize = require("sequelize");

class Bus_Stops extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_bus_stop: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        is_terminal:{
          type: Sequelize.BOOLEAN,
          allowNull: false, 
        },
        latitude:{
          type: Sequelize.FLOAT(40,6),
          allowNull: false, 
        },
        longitude:{
          type: Sequelize.FLOAT(40,6),
          allowNull: false, 
        },
        id_adress:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "bus_stops",
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.adresses, {
      foreignKey: "id_adress",
      as: "adress",
    });
  }
}

module.exports = Bus_Stops;
