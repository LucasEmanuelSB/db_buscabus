const Sequelize = require("sequelize");
const config = require("../config.json"); // ???

const Adresses  = require("./adresses");
const Buses = require("./buses");
const BusDrivers = require("./busDrivers");
const BusStops = require("./busStops");
const Calendars = require("./calendars");
const GlobalPositions = require("./globalPositions");
const Itinerarys = require("./itinerarys");
const Points = require("./points");
const Routes = require("./routes");
const RoutesBusStops = require("./routesBusStops")

const models = [
  Adresses,
  Buses,
  BusDrivers,
  BusStops,
  Calendars,
  GlobalPositions,
  Itinerarys,
  Points,
  Routes,
  RoutesBusStops,

];

class Database {
  constructor() {
    this.init();
  }

  init() {
      const sequelize = new Sequelize(config.sequelize);

    models
      .map((model) => model.init(sequelize))
      //.map((model) => model.sync({ force: true }))
      .map((model) => model.associate && model.associate(sequelize.models));
  }
}

module.exports = new Database();
