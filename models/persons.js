const Sequelize = require("sequelize");

class Persons extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_person: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        device_adress: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "persons",
      }
    );

    return this;
  }
 
  static associate(models) {
    this.belongsTo(models.connections, {
      onDelete: 'CASCADE',
      // as: "connection",
      
    });
  }
  static associate(models) {
    this.hasOne(models.users, {
      // as: "user_account",
    });
  } 
  
}

module.exports = Persons;
