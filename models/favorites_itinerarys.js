const Sequelize = require("sequelize");

class Favorites_Itinerarys extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_favorite_itinerary: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        id_user:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        },
        id_itinerary:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        },
        description:{
          type: Sequelize.STRING,
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "favorites_itinerarys",
      }
    );

    return this;
  }

  static associate(models) {
    this.hasOne(models.itinerarys, {
      foreignKey: "id_itinerary",
      as: "itinerary",
    });
  }

  static associate(models) {
    this.hasOne(models.users, {
      foreignKey: "id_user",
      as: "user",
    });
  }
}

module.exports = Favorites_Itinerarys;
