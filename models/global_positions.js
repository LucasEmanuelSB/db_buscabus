const Sequelize = require("sequelize");

class Global_Positions extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_global_positions: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        id_onibus:{
          type: Sequelize.INTEGER,
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
        time:{
          type: Sequelize.timestamps,
          allowNull: false, 
        },
        is_gps:{
          type: Sequelize.BOOLEAN,
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "global_positions",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.bus, {
      foreignKey: "id_bus",
      as: "bus",
    });
  }

}

module.exports = Global_Positions;
