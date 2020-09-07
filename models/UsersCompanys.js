const Sequelize = require("sequelize");

class UsersCompanys extends Sequelize.Model {
    static init(sequelize) {
      super.init(
        {
           userId:{
            primaryKey: true,
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            
          },
          companyId:{
            primaryKey: true,
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
          },
          rate: {
            type: Sequelize.DECIMAL,
            allowNull: true,
          }
        },
        {
          freezeTableName: true,
          timestamps: false,
          sequelize,
          modelName: "UsersCompanys",
        }
      );
      return this;
    }
}

module.exports = UsersCompanys;