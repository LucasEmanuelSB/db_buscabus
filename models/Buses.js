const Sequelize = require("sequelize");

class Buses extends Sequelize.Model {     // Classe Buses herda modelo do sequelize
  
  static init(sequelize) {                // Constrututor do modelo
    super.init(
      {
        id: {                         // Nome dado ao parâmetro
          type: Sequelize.INTEGER,    // Define o tipo do parâmetro como inteiro
          primaryKey: true,           // Define parâmetro como chave primária
          autoIncrement: true,        // Habilita o auto incremento do parâmetro
        },
        line: {
          type: Sequelize.INTEGER,
          allowNull: true,            // Permite a entrada de valores nulos
        },
        isAvailable:{
          type: Sequelize.BOOLEAN,
          allowNull: false, 
        },
        busDriverId:{
          type: Sequelize.INTEGER,
          allowNull: true,
          onDelete: 'CASCADE'         // Os elementos relacionados são deletados 
        },
        realTimeDataId: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "buses",
      }
    );

    return this;
  }

  static associate(models){               // Realiza as associações entre modelos
    
    this.belongsTo(models.busDrivers,{    // Este modelo pertence a /possui um busDriver
      foreignKey: 'busDriverId',          // define a chave estrangeira
      as: 'busDriver'                     // Nomeia a ligação como 'busDriver'
    });

    this.hasOne(models.itinerarys,{       // Este modelo possui um/pertence a itinerarys
      foreignKey: 'busId',  
      sourceKey: 'id',
      as: 'itinerary'
    });

    this.belongsTo(models.realTimeData, { // Este modelo possui um/pertence a realTimeDate
      foreignKey: 'realTimeDataId',
      as: 'realTimeData'
    });
  }

}

module.exports = Buses;
