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
          allowNull: false,
        },
        id_route: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        id_start_adress:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        },
        id_end_adress:{
          type: Sequelize.INTEGER,
          allowNull: false, 
        },
        id_calendar:{
          type: Sequelize.INTEGER,
          allowNull: false, 
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

    this.belongsTo(models.calendars,{
      foreignKey: 'id_calendar'
    });
    
    this.belongsTo(models.bus_stops,{
      foreignKey: 'id_start_adress',
    });
    
    this.belongsTo(models.bus_stops,{
      foreignKey: 'id_end_adress',
    });

    this.belongsToMany(models.users,{
      through: models.users_itinerarys,
      foreignKey: 'id_itinerary',
      as: 'users_favorites'
    });

  }
}

module.exports = Itinerarys;
