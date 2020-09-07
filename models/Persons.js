const Sequelize = require("sequelize");

class Persons extends Sequelize.Model {
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
          allowNull: false,
        },
        deviceAdress: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "Persons",
      }
    );

    return this;
  }

  static associate(models){
    this.belongsTo(models.Buses,{
      foreignKey: 'busId',
      as: 'bus'
    });
  }

}

module.exports = Persons;
