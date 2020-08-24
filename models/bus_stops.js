const Sequelize = require("sequelize");

class Bus_Stops extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_bus_stop: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        is_terminal:{
          type: Sequelize.BOOLEAN,
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
        id_adress:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "bus_stops",
      }
    );

    return this;
  }

  static associate(models) {
    this.hasOne(models.adresses, {
      foreignKey: "id_adress",
      as: "adress",
    });
  }
  static associate(models) {
    this.belongsToMany(models.users, {
      through: "Favorite_Bus_Stops",
      onDelete: 'CASCADE',
      as: "favorites_bus_stops"
    });
  }
  static associate(models) {
    this.belongsTo(models.itinerarys, {
      as: "itinerary_start_adress",
    });
  }
  static associate(models) {
    this.belongsTo(models.itinerarys, {
      as: "itinerary_end_adress"
    });
  }
   static associate(models) {
    this.belongsToMany(models.routes, {
      through: "Routes_Bus_Stops",
      as: "routes_bus_stops"
    });
  } 

  
}

module.exports = Bus_Stops;
