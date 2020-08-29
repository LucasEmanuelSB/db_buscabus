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
        id_bus: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        id_route: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        id_start_adress:{
          type: Sequelize.INTEGER,
          allowNull: true, 
        },
        id_end_adress:{
          type: Sequelize.INTEGER,
          allowNull: true, 
        },
        id_calendar:{
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

    this.belongsTo(models.bus,{
      foreignKey: 'id_bus'
    });

    this.belongsTo(models.routes,{
      foreignKey: 'id_route'
    });

    this.belongsTo(models.calendars,{
      foreignKey: 'id_calendar'
    });

    this.belongsTo(models.bus_stops,{
      foreignKey: 'id_start_adress',
      as: 'start_adress'
    });
    
    this.belongsTo(models.bus_stops,{
      foreignKey: 'id_end_adress',
      as: 'end_adress'
    });

  }
}

module.exports = Itinerarys;
