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
        busDriverId:{
          type: Sequelize.INTEGER,
          allowNull: true,
          onDelete: 'CASCADE'
        },
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

    this.belongsToMany(models.GlobalPositions,{
      through: models.BusGlobalPositions,
      foreignKey: 'busId',
      as: 'globalPositions'
    });

    this.hasMany(models.Persons,{
      foreignKey: 'busId',
      as: 'persons'
    });
  }

}

module.exports = Buses;
