const Sequelize = require("sequelize");

class Bus extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_bus: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        number: {
          type: Sequelize.INTEGER,
          primaryKey: true,
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

  static associate(models) {
    this.hasMany(models.global_positions);
  }
  static associate(models) {
    this.hasMany(models.connections, {
      onDelete: 'CASCADE'
    });
  }
  static associate(models) {
    this.belongsToMany(models.itinerarys);
  }
  static associate(models) {
    this.belongsToMany(models.favorites_bus,{
      onDelete: 'CASCADE'
    });
  }
  static associate(models) {
    this.hasMany(models.bus_drivers);
  }
}

module.exports = Bus;
