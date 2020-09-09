const Sequelize = require("sequelize");

class GlobalPositions extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        busId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        latitude:{
          type: Sequelize.FLOAT,
          allowNull: false, 
        },
        longitude:{
          type: Sequelize.FLOAT,
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: true,
        sequelize,
        modelName: "GlobalPositions",
      }
    );

    return this;
  }

  static associate(models){

    this.belongsTo(models.Buses,{
      foreignKey: 'busId',
      as: 'bus'
    });
  }
  
}

module.exports = GlobalPositions;
