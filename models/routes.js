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
        points:{
          type: Sequelize.JSON,
          allowNull: false, 
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
      foreignKey: 'id_route'
    })

    this.hasMany(models.itinerarys,{
      foreignKey: 'id_route',
      sourceKey: 'id',
      as: 'itinerarys'
    })
  }
  
}

module.exports = Routes;
