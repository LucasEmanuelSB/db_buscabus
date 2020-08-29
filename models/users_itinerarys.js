const Sequelize = require("sequelize");

class Users_Itinerarys extends Sequelize.Model {
    static init(sequelize) {
      super.init(
        {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
           id_user:{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            allowNull: false,
          },
          id_itinerary:{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            allowNull: false,
          } 
        },
        {
          freezeTableName: true,
          timestamps: false,
          sequelize,
          modelName: "users_itinerarys",
        }
      );
      return this;
    }
}

module.exports = Users_Itinerarys;