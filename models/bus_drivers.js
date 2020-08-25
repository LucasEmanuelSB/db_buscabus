const Sequelize = require("sequelize");

class Bus_Drivers extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
/*         id_bus:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        }, */
        average_rate:{
          type: Sequelize.DECIMAL(1,1),
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "bus_drivers",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.users, {
      through: models.ratings_bus_drivers,
      onDelete: 'CASCADE'
    });
  } 
  static associate(models) {
    this.belongsTo(models.bus, {
      //foreignKey: "id_bus",
      // as: "bus",
    });
  }
}

module.exports = Bus_Drivers;
