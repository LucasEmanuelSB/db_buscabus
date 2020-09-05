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
        id_bus: {
          type: Sequelize.INTEGER,
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
        modelName: "persons",
      }
    );

    return this;
  }

  static associate(models){
    this.belongsTo(models.bus,{
      foreignKey: 'id_bus',
      as: 'bus'
    });
  }

}

module.exports = Persons;
