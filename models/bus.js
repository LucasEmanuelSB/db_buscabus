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
          primaryKey: true,
        },
        is_available:{
          type: Sequelize.BOOLEAN,
          allowNull: false, 
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

   static associate(models) {
    this.hasMany(models.global_positions,{
      foreignKey: "id_bus",
      as: "global_positions",
      onDelete: 'CASCADE',
    });
    //models.global_positions.belongsTo(this);
  }

/*   static associate(models) {
    this.hasMany(models.connections, {
      onDelete: 'CASCADE',
      // as: "connections",
    });
  }
  static associate(models) {
    this.belongsToMany(models.itinerarys,{
      // as: "itinerarys",
    });
  }
  static associate(models) {
    this.belongsToMany(models.users,{
      through: models.favorites_bus_stop,
      onDelete: 'CASCADE',
      // as: "favorites_bus"
    });
  } 
   static associate(models) {
    this.hasOne(models.bus_drivers,{
      // as: "bus_drivers",
    });
  }  */
}

module.exports = Bus;
