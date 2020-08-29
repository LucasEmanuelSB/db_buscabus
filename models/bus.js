const Sequelize = require("sequelize");

class Bus extends Sequelize.Model {
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
        is_available:{
          type: Sequelize.BOOLEAN,
          allowNull: false, 
        },
        id_bus_driver:{
          type: Sequelize.INTEGER,
          allowNull: true,
          onDelete: 'CASCADE'
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

  static associate(models){
    
    this.belongsTo(models.bus_drivers,{
      foreignKey: 'id_bus_driver',
      as: 'bus_driver'
    });

    this.hasOne(models.itinerarys,{
      foreignKey: 'id_bus',
      sourceKey: 'id',
      as: 'itinerary'
    });

    this.belongsToMany(models.global_positions,{
      through: models.bus_global_positions,
      foreignKey: 'id_bus',
      as: 'current_position'
    });

    this.hasMany(models.persons,{
      foreignKey: 'id_bus',
      as: 'persons'
    });
  }

}

module.exports = Bus;
