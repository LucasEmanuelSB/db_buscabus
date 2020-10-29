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
        startId: {
          type: Sequelize.INTEGER,
          autoIncrement: false,
          allowNull: true
        },
        endId: {
          type: Sequelize.INTEGER,
          autoIncrement: false,
          allowNull: true
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

    this.belongsTo(models.busStops,{
      foreignKey: 'startId',
      as: 'start'
    })

    this.belongsTo(models.busStops,{
      foreignKey: 'endId',
      as: 'end'
    })

    this.belongsToMany(models.busStops,{
      through: 'routesBusStops',
      foreignKey: 'routeId',
      as: 'path'
    })

    this.hasMany(models.itinerarys,{
      foreignKey: 'routeId',
      sourceKey: 'id',
      as: 'itinerarys'
    })
  }
  
}

module.exports = Routes;
