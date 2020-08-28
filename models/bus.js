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
        }
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
    
    this.hasMany(models.itinerarys,{
      foreignKey: 'id_bus',
      sourceKey: 'id',
      as: 'itinerarys'
    });

    this.belongsToMany(models.users,{
      through: models.users_bus,
      foreignKey: 'id_bus',
      as: 'users_favorites'
    });

    this.belongsToMany(models.global_positions,{
      through: models.bus_global_positions,
      foreignKey: 'id_bus',
      as: 'current_position'
    });
  }

}

module.exports = Bus;
