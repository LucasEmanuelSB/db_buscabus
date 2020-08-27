const Sequelize = require("sequelize");
const config = require("../config.json"); // ???

const Adresses  = require("../models/adresses");
const Bus = require("../models/bus");
const Bus_Drivers = require("../models/bus_drivers");
const Bus_Global_Positions = require("../models/bus_global_positions");
const Bus_Stops = require("../models/bus_stops");
const Companys = require("../models/companys");
const Connections = require("../models/connections");
const Global_Positions = require("../models/global_positions");
const Itinerarys = require("../models/itinerarys");
const Persons = require("../models/persons");
const Routes = require("../models/routes");
const Routes_Bus_Stops = require("../models/routes_bus_stops")
const Users = require("../models/users");

const models = [
    Adresses,
    Bus, 
    Bus_Drivers,
    Bus_Global_Positions, 
    Bus_Stops, 
    Companys, 
    Connections,  
    Global_Positions, 
    Itinerarys, 
    Persons, 
    Routes, 
    Routes_Bus_Stops, 
    Users 
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
