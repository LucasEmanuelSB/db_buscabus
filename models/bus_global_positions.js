const Sequelize = require("sequelize");
const Bus = require("./bus");
const Global_Positions = require("./global_positions");

class Bus_Global_Positions extends Sequelize.Model {
    static init(sequelize) {
      super.init(
        {
           id_bus:{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            primaryKey: true,
          },
          id_global_position:{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            primaryKey: true,
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