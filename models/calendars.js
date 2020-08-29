const Sequelize = require("sequelize");
const { options } = require("./adresses");

class Calendar extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        week: {
            type: Sequelize.ARRAY(Sequelize.DataTypes.TIME)
        },
        weekends_holidays: {
            type: Sequelize.ARRAY(Sequelize.DataTypes.TIME)
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
      foreignKey: 'id_calendar',
      sourceKey: 'id'
    });
    
  }
}

module.exports = Calendar;
