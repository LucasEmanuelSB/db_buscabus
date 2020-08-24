const Sequelize = require("sequelize");

class Companys extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_company: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false, 
        },
        average_rate:{
          type: Sequelize.DECIMAL(1,1),
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "companys",
      }
    );

    return this;
  }
}

module.exports = Companys;
