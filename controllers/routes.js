const Route = require("../models/routes");

async function createRoute(route_) {

  let route = null;

  try {
    route = await Route.create({
      route_
    });
    return route;
  } catch (error) {
    throw new Error(error);
  }
}

async function findRoute(id_route) {
  let route = null;

  try {
    route = await Route.findOne({
      raw: true, // ???
      // nest: true,
      where: id_route
    });
    return route;
  } catch (error) {
    throw new Error(error);
  }
}

async function findRoutes() {
  let routes = null;

  try {
    routes = await Route.findAll({
      raw: true,
    });

    return routes;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateRoute(id_route, obj) {
  let route = null;

  try {
    route = await Route.update(obj, {
      where: id_route
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteRoute(id_route){
    try{
        await Route.destroy({
            where: id_route
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createRoute,
  findRoute,
  findRoutes,
  updateRoute,
  deleteRoute
};
