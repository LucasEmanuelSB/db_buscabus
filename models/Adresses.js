const Sequelize = require("sequelize");

class Adresses extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        country: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        uf: {
          type: Sequelize.CHAR(2),
          allowNull: false,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        neighborhood: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        street: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cep: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        number: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        globalPositionId: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "Adresses",
      }
    );

    return this;
  }

  static associate(models) {

    this.hasOne(models.BusStops, {
      foreignKey: 'adressId',
      sourceKey: 'id',
    });

    this.belongsTo(models.GlobalPositions, {
      foreignKey: 'globalPositionId',
      as: 'globalPosition'
    });
  }
}
module.exports = Adresses;
