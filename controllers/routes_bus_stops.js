const Route_Bus_Stop = require("../models/routes_bus_stops");

async function createRouteBusStop(id_route, id_bus_stop) {

  let route_bus_stop = null;

  try {
    route_bus_stop = await Route_Bus_Stop.create({
      id_route, 
      id_bus_stop
    });
    return route_bus_stop;
  } catch (error) {
    throw new Error(error);
  }
}

async function findRouteBusStop(id_route_bus_stop) {
  let route_bus_stop = null;

  try {
    route_bus_stop = await Route_Bus_Stop.findOne({
      raw: true, // ???
      // nest: true,
      where: id_route_bus_stop
    });
    return route_bus_stop;
  } catch (error) {
    throw new Error(error);
  }
}

async function findRoutesBusStops() {
  let routes_bus_stops = null;

  try {
    routes_bus_stops = await Route_Bus_Stop.findAll({
      raw: true,
    });

    return routes_bus_stops;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateRouteBusStop(id_route_bus_stop, obj) {
  let route_bus_stop = null;

  try {
    route_bus_stop = await Route_Bus_Stop.update(obj, {
      where: id_route_bus_stop
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteRouteBusStop(id_route_bus_stop){
    try{
        await Route_Bus_Stop.destroy({
            where: id_route_bus_stop
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createRouteBusStop,
  findRouteBusStop,
  findRoutesBusStops,
  updateRouteBusStop,
  deleteRouteBusStop
};
