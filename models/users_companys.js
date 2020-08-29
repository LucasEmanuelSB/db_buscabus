const Sequelize = require("sequelize");

class Users_Companys extends Sequelize.Model {
    static init(sequelize) {
      super.init(
        {
           id_user:{
            primaryKey: true,
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            
          },
          id_company:{
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
          modelName: "users_companys",
        }
      );
      return this;
    }
}

module.exports = Users_Companys;