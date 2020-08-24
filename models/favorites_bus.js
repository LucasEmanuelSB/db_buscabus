const Sequelize = require("sequelize");

class Favorites_Bus extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_favorite_bus: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        id_bus:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        },
        id_user:{
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
        modelName: "favorites_bus",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.bus, {
      foreignKey: "id_bus",
      as: "bus",
    });
  }

  static associate(models) {
    this.belongsTo(models.users, {
      foreignKey: "id_user",
      as: "user",
    });
  }
  
}

module.exports = Favorites_Bus;
