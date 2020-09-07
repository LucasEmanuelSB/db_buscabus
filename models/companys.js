const Sequelize = require("sequelize");

class Companys extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true, 
        },
        averageRate:{
          type: Sequelize.DECIMAL,
          allowNull: true,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "Companys",
      }
    );

    return this;
  }

  static associate(models){
    
    this.belongsToMany(models.Users,{
      through: models.UsersCompanys,
      foreignKey: 'companyId',
      as: 'usersRatings'
    });
  }
}

module.exports = Companys;
