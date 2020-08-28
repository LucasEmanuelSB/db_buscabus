const Sequelize = require("sequelize");

class Users_Companys extends Sequelize.Model {
    static init(sequelize) {
      super.init(
        {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          rate: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
          }, 
           id_user:{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            allowNull: false,
          },
          id_company:{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            allowNull: false,
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