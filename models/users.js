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
          type: Sequelize.DATE,
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
          allowNull: false,
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

  static associate(models) {
    this.belongsTo(models.persons, {
      foreignKey: "device_adress",
      //// as: "device_adress_",
    });
  }
  static associate(models) {
    this.belongsToMany(models.bus, {
      through: models.favorites_bus,
      // as: "favorites_bus",
      onDelete: 'CASCADE'
    });
  }
  static associate(models) {
    this.belongsToMany(models.bus_stop, {
      through: models.favorites_bus_stop,
      // as: "favorites_bus_stops",
      onDelete: 'CASCADE'
    });
  }
  static associate(models) {
    this.belongsToMany(models.itinerarys, {
      through: models.favorites_itinerarys,
      // as: "favorites_itinerarys",
      onDelete: 'CASCADE'
    });
  }
  static associate(models) {
    this.belongsTo(models.bus_drivers, {
      through: models.ratings_bus_drivers,
      // as: "ratings_bus_drivers",
      onDelete: 'CASCADE'
    });
  }
  static associate(models) {
    this.belongsToMany(models.companys, {
      through: models.ratings_companys,
      // as: "ratings_companys",
      onDelete: 'CASCADE'
    });
  } 

}

module.exports = Users;
