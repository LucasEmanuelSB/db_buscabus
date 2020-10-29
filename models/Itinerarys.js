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
        calendarId:{
          type: Sequelize.INTEGER,
          allowNull: true, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "itinerarys",
      }
    );

    return this;
  }

  static associate(models){

    this.belongsTo(models.buses,{
      foreignKey: 'busId',
      as: 'bus'
    });

    this.belongsTo(models.routes,{
      foreignKey: 'routeId',
      as: 'route'
    });

    this.belongsTo(models.calendars,{
      foreignKey: 'calendarId',
      as: 'calendar'
    });

  }
}

module.exports = Itinerarys;
