const Sequelize = require("sequelize");

class Users_Bus_Drivers extends Sequelize.Model {
    static init(sequelize) {
      super.init(
        {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          rate: {
            type: Sequelize.DECIMAL(2,1),
            allowNull: true,
          }, 
           id_user:{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            allowNull: false,
          },
          id_bus_driver:{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            allowNull: false,
          } 
        },
        {
          freezeTableName: true,
          timestamps: false,
          sequelize,
          modelName: "users_bus_drivers",
        }
      );
      return this;
    }
}

module.exports = Users_Bus_Drivers;