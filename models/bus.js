const Sequelize = require("sequelize");

class Bus extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_bus: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        number: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        is_available:{
          type: Sequelize.BOOLEAN,
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "bus",
      }
    );

    return this;
  }
  
}

module.exports = Bus;
