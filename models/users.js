const Sequelize = require("sequelize");

class Users extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_user: {
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
          type: Sequelize.FLOAT(4,2),
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
      as: "device_adress",
    });
  }
}

module.exports = Users;
