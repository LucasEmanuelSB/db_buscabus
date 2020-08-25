const Sequelize = require("sequelize");

class Ratings_Companys extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_rating_company: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        id_company: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        id_user:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        rate:{
          type: Sequelize.DECIMAL(1,1),
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "ratings_companys",
      }
    );

    return this;
  }

  static associate(models) {
    this.hasOne(models.companys, {
      foreignKey: "id_company",
      // as: "company",
    });
  }
  static associate(models) {
    this.hasOne(models.users, {
      foreignKey: "id_user",
      // as: "user",
    });
  }
}

module.exports = Ratings_Companys;
