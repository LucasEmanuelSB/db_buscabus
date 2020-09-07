const Sequelize = require("sequelize");

class GlobalPositions extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        latitude:{
          type: Sequelize.FLOAT,
          allowNull: false, 
        },
        longitude:{
          type: Sequelize.FLOAT,
          allowNull: false, 
        },
        timeSample:{
          type: Sequelize.TIME,
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "GlobalPositions",
      }
    );

    return this;
  }

  static associate(models){

    this.belongsToMany(models.Buses,{
      through: models.BusGlobalPositions,
      foreignKey: 'globalPositionId',
      as: 'buses'
    });
  }
  
}

module.exports = GlobalPositions;
