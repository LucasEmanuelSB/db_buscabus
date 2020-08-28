const Sequelize = require("sequelize");

class Users extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        surname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        birth_date: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        gender: {
          type: Sequelize.CHAR(1),
          allowNull: false,
        },
        job: {
          type: Sequelize.CHAR(2),
          allowNull: false,
        },
        credits: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        is_online: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        device_adress: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "users",
      }
    );

    return this;
  }

  static associate(models){

    this.belongsToMany(models.bus,{
      through: models.users_bus,
      foreignKey: 'id_user',
      as: 'favorites_bus'
    });

    this.belongsToMany(models.bus_stops,{
      through: models.users_bus_stops,
      foreignKey: 'id_user',
      as: 'favorites_bus_stops'
    });

    this.belongsToMany(models.itinerarys,{
      through: models.users_itinerarys,
      foreignKey: 'id_user',
      as: 'favorites_itinerarys'
    });

    this.belongsToMany(models.bus_drivers,{
      through: models.users_bus_drivers,
      foreignKey: 'id_user',
      as: 'ratings_bus_drivers'
    });

    this.belongsToMany(models.companys,{
      through: models.users_companys,
      foreignKey: 'id_user',
      as: 'ratings_company'
    });
  }
}

module.exports = Users;
