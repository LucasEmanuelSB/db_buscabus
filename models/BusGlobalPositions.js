const Sequelize = require("sequelize");

class BusGlobalPositions extends Sequelize.Model {
    static init(sequelize) {
      super.init(
        {
          busId:{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            primaryKey: true,
          },
          globalPositionId:{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            primaryKey: true,
          } 
        },
        {
          freezeTableName: true,
          timestamps: false,
          sequelize,
          modelName: "BusGlobalPositions",
        }
      );
      return this;
    }
}

module.exports = BusGlobalPositions;