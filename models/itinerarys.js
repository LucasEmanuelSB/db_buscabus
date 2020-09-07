const Sequelize = require("sequelize");

class Itinerarys extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        busId: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        routeId: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        startBusStopId:{
          type: Sequelize.INTEGER,
          allowNull: true, 
        },
        endBusStopId:{
          type: Sequelize.INTEGER,
          allowNull: true, 
        },
        calendarId:{
          type: Sequelize.INTEGER,
          allowNull: true, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "Itinerarys",
      }
    );

    return this;
  }

  static associate(models){

    this.belongsTo(models.Buses,{
      foreignKey: 'busId',
      as: 'bus'
    });

    this.belongsTo(models.Routes,{
      foreignKey: 'routeId',
      as: 'route'
    });

    this.belongsTo(models.Calendars,{
      foreignKey: 'calendarId',
      as: 'calendar'
    });

    this.belongsTo(models.BusStops,{
      foreignKey: 'startBusStopId',
      as: 'startBusStop'
    });
    
    this.belongsTo(models.BusStops,{
      foreignKey: 'endBusStopId',
      as: 'endBusStop'
    });

  }
}

module.exports = Itinerarys;
