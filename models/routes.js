const Sequelize = require("sequelize");

class Routes extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        route:{
          type: Sequelize.JSON,
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "routes",
      }
    );

    return this;
  }
}

module.exports = Routes;
