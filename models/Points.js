const Sequelize = require("sequelize");

class Points extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        latitude: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        longitude: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        routeId: {
          type: Sequelize.INTEGER,
          allowNull: true
        }
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "Points",
      }
    );

    return this;
  }

  static associate(models){
    this.belongsTo(models.Routes,{
      foreignKey: 'routeId',
      as: 'route'
    })
  }
}

module.exports = Points;
