const Sequelize = require("sequelize");
const config = require("../config.json");

const Adresses  = require("./adresses");
const Buses = require("./buses");
const BusDrivers = require("./busDrivers");
const BusStops = require("./busStops");
const Calendars = require("./calendars");
const RealTimeData = require("./realTimeData");
const Itinerarys = require("./itinerarys");
const Routes = require("./routes");
const RoutesBusStops = require("./routesBusStops");

const models = [                                                             // Armazena em um vetor todos modelos
  Adresses,
  Buses,
  BusDrivers,
  BusStops,
  Calendars,
  RealTimeData,
  Itinerarys,
  Routes,
  RoutesBusStops,

];

class Database {                                                             // Cria um Banco de Dados
  constructor() {
    this.init();
  }

  init() {
      const sequelize = new Sequelize(config.sequelize);                     // Importa as configurações do servidor PostgreSQL

    models                                                                   // Variável que armazena todos os modelos
      .map((model) => model.init(sequelize))                                 // Inicializa modelos
      //.map((model) => model.sync())                                       // Força a criação de tabelas 
      .map((model) => model.associate && model.associate(sequelize.models)); // Realiza as associações
  }
}

module.exports = new Database();
