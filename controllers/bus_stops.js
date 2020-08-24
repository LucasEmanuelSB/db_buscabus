const Bus_Stop = require("../models/Bus_Stops");

async function createBusStop(is_terminal, latitude, longitude, id_adress) {

  let bus_stop = null;

  try {
    bus_stop = await Bus_Stop.create({
      is_terminal, 
      latitude, 
      longitude, 
      id_adress
    });
    return bus_stop;
  } catch (error) {
    throw new Error(error);
  }
}

async function findBusStop(id_bus_stop) {
  let bus_stop = null;

  try {
    bus_stop = await Bus_Stop.findOne({
      raw: true, // ???
      // nest: true,
      where: id_bus_stop
    });
    return bus_stop;
  } catch (error) {
    throw new Error(error);
  }
}

async function findBusStops() {
  let bus_stops = null;

  try {
    bus_stops = await Bus_Stop.findAll({
      raw: true,
    });

    return bus_stops;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateBusStop(id_bus_stop, obj) {
  let bus_stop = null;

  try {
    bus_stop = await Bus_Stop.update(obj, {
      where: id_bus_stop
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteBusStop(id_bus_stop){
    try{
        await Bus_Stop.destroy({
            where: id_bus_stop
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createBusStop,
  findBusStop,
  findBusStops,
  updateBusStop,
  deleteBusStop
};
