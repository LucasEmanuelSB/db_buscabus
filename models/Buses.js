const Sequelize = require("sequelize");

class Buses extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        line: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        isAvailable:{
          type: Sequelize.BOOLEAN,
          allowNull: false, 
        },
        velocity: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        busDriverId:{
          type: Sequelize.INTEGER,
          allowNull: true,
          onDelete: 'CASCADE'
        },
        globalPositionId: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        nDevices: {
          type: Sequelize.INTEGER,
          allowNull: true,
        }
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "Buses",
      }
    );

    return this;
  }

  static associate(models){
    
    
    this.belongsTo(models.BusDrivers,{
      foreignKey: 'busDriverId',
      as: 'busDriver'
    });

    this.hasOne(models.Itinerarys,{
      foreignKey: 'busId',
      sourceKey: 'id',
      as: 'itinerary'
    });

    this.belongsTo(models.GlobalPositions, {
      foreignKey: 'globalPositionId',
      as: 'currentPosition'
    });
  }



}

module.exports = Buses;
