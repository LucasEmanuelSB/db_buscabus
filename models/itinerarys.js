const Sequelize = require("sequelize");
const { foreign_key } = require("inflection");

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
        date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        time: {
          type: Sequelize.TIME,
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
    this.belongsTo(models.bus_stops,{
      foreignKey: 'id_start_adress',
    });
  }
  static associate(models){
    this.belongsTo(models.bus_stops,{
      foreignKey: 'id_end_adress',
    });
  }
  static associate(models){
    this.belongsToMany(models.users,{
      through: models.users_itinerarys,
      foreignKey: 'id_itinerary',
      as: 'users_favorites'
    });
  }
}

module.exports = Itinerarys;
