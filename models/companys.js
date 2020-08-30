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
        average_rate:{
          type: Sequelize.DECIMAL,
          allowNull: true,
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

  static associate(models){
    
    this.belongsToMany(models.users,{
      through: models.users_companys,
      foreignKey: 'id_company',
      as: 'users_ratings'
    });
  }
}

module.exports = Companys;
