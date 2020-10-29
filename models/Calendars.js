const Sequelize = require("sequelize");

class Calendars extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        weeks: {
            type: Sequelize.ARRAY(Sequelize.DataTypes.TIME),
            allowNull: false,
        },
        weekendsHolidays: {
            type: Sequelize.ARRAY(Sequelize.DataTypes.TIME),
            allowNull: false
        }
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "calendars",
      }
    );

    return this;
  }

  static associate(models){

    this.hasOne(models.itinerarys,{
      foreignKey: 'calendarId',
      sourceKey: 'id'
    });
    
  }
}

module.exports = Calendars;
