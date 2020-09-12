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
        personId: {
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
        birthDate: {
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
        isOnline: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        deviceAdress: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: true 
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
        modelName: "Users",
      }
    );

    return this;
  }

  static associate(models){

    this.belongsTo(models.Persons,{
      foreignKey: 'personId',
      as: 'person'
    });

    this.belongsToMany(models.BusDrivers,{
      through: models.UsersBusDrivers,
      foreignKey: 'userId',
      as: 'ratingsBusDrivers'
    });

    this.belongsToMany(models.Companys,{
      through: models.UsersCompanys,
      foreignKey: 'userId',
      as: 'ratingsCompanys'
    });
  }
}

module.exports = Users;
