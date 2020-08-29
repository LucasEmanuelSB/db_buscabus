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
        id_person: {
          type: Sequelize.INTEGER,
          allowNull: true,
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
          unique: true,
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
          defaultValue: 'A'
        },
        job: {
          type: Sequelize.CHAR(2),
          allowNull: false,
          defaultValue: "AN"
        },
        credits: {
          type: Sequelize.FLOAT,
          allowNull: false,
          defaultValue: 0.0
        },
        is_online: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        device_adress: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        favorites: {
          type: Sequelize.JSON,
          allowNull: true
        }
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

    this.belongsTo(models.persons,{
      foreignKey: 'id_person'
    });

    this.belongsToMany(models.bus_drivers,{
      through: models.users_bus_drivers,
      foreignKey: 'id_user',
      as: 'ratings_bus_drivers'
    });

    this.belongsToMany(models.companys,{
      through: models.users_companys,
      foreignKey: 'id_user',
      as: 'ratings_companys'
    });
  }
}

module.exports = Users;
