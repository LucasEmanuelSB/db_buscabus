const Sequelize = require("sequelize");

class Users_Bus_Drivers extends Sequelize.Model {
    static init(sequelize) {
      super.init(
        {
           id_user:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            onDelete: 'CASCADE',
          },
          id_bus_driver:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            onDelete: 'CASCADE',
          },
          rate: {
            type: Sequelize.DECIMAL,
            allowNull: false,
          },  
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