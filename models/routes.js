const Sequelize = require("sequelize");

class Routes extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "routes",
      }
    );

    return this;
  }

  static associate(models){

    this.belongsToMany(models.bus_stops,{
      through: models.routes_bus_stops,
      foreignKey: 'id_route',
      as: 'bus_stops'
    })

    this.hasMany(models.itinerarys,{
      foreignKey: 'id_route',
      sourceKey: 'id',
      as: 'itinerarys'
    })

    this.hasMany(models.points,{
      foreignKey: 'id_route',
      sourceKey: 'id',
      as: 'points'
    })
  }
  
}

module.exports = Routes;
