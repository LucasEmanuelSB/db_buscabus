const Sequelize = require("sequelize");
const config = require("../config.json"); // ???

const Adresses  = require("../models/Adresses");
const Buses = require("../models/Buses");
const BusDrivers = require("../models/BusDrivers");
const BusStops = require("../models/BusStops");
const Calendars = require("../models/Calendars");
const Companys = require("../models/Companys");
const GlobalPositions = require("../models/GlobalPositions");
const Itinerarys = require("../models/Itinerarys");
const Persons = require("../models/Persons");
const Points = require("../models/Points");
const Routes = require("../models/Routes");
const RoutesBusStops = require("../models/RoutesBusStops")
const Users = require("../models/Users");
const UsersBusDrivers = require("../models/UsersBusDrivers");
const UsersCompanys = require("../models/UsersCompanys");

const models = [
  Adresses,
  Buses,
  BusDrivers,
  BusStops,
  Calendars,
  Companys,
  GlobalPositions,
  Itinerarys,
  Persons,
  Points,
  Routes,
  RoutesBusStops,
  Users,
  UsersBusDrivers,
  UsersCompanys
];

class Database {
  constructor() {
    this.init();
  }

  init() {
      const sequelize = new Sequelize(config.sequelize);

    models
      .map((model) => model.init(sequelize))
      .map((model) => model.sync({ force: true }))
      .map((model) => model.associate && model.associate(sequelize.models));
  }
}

module.exports = new Database();
