const Sequelize = require("sequelize");

class Global_Positions extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        latitude:{
          type: Sequelize.FLOAT,
          allowNull: false, 
        },
        longitude:{
          type: Sequelize.FLOAT,
          allowNull: false, 
        },
        time_sample:{
          type: Sequelize.TIME,
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "global_positions",
      }
    );

    return this;
  }

  static associate(models){
    this.belongsToMany(models.bus,{
      through: models.bus_global_positions,
      foreignKey: 'id_global_position',
    });
  }
}

module.exports = Global_Positions;
