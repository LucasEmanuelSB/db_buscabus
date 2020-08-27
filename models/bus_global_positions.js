const Sequelize = require("sequelize");
const Bus = require("./bus");
const Global_Positions = require("./global_positions");

class Bus_Global_Positions extends Sequelize.Model {
    static init(sequelize) {
      super.init(
        {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
           id_bus:{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            allowNull: false,
          },
          id_global_position:{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            allowNull: false,
          } 
        },
        {
          freezeTableName: true,
          timestamps: false,
          sequelize,
          modelName: "bus_global_positions",
        }
      );
      return this;
    }
}

module.exports = Bus_Global_Positions;