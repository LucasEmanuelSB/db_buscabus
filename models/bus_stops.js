const Sequelize = require("sequelize");

class Bus_Stops extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        is_terminal: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        latitude: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        longitude: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        id_adress: {
          type: Sequelize.INTEGER,
          allowNull: true,
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

    this.belongsToMany(models.routes,{
      through: models.routes_bus_stops,
      foreignKey: 'id_bus_stop',
      as: 'routes'
    })

    this.belongsTo(models.adresses, {
      foreignKey: 'id_adress',
      as : 'adress',
    });

  }

}

module.exports = Bus_Stops;