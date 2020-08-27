const Sequelize = require("sequelize");

class Bus extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        line: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        is_available:{
          type: Sequelize.BOOLEAN,
          allowNull: false, 
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "bus",
      }
    );

    return this;
  }

  static associate(models){
    this.belongsToMany(models.global_positions,{
      through: models.bus_global_positions,
      foreignKey: 'id_bus',
      as: 'current_position'
    });
  }
}

module.exports = Bus;
