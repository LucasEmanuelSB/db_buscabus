const Sequelize = require("sequelize");

class Users_Bus extends Sequelize.Model {
    static init(sequelize) {
      super.init(
        {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          is_favorite: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          }, 
           id_user:{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            allowNull: false,
          },
          id_bus:{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            allowNull: false,
          }
        },
        {
          freezeTableName: true,
          timestamps: false,
          sequelize,
          modelName: "users_bus",
        }
      );
      return this;
    }
}

module.exports = Users_Bus;