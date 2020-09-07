const Sequelize = require("sequelize");

class UsersBusDrivers extends Sequelize.Model {
    static init(sequelize) {
      super.init(
        {
           userId:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            onDelete: 'CASCADE',
          },
          busDriverId:{
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
          modelName: "UsersBusDrivers",
        }
      );
      return this;
    }
}

module.exports = UsersBusDrivers;