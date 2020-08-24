const Favorite_Bus_Stop = require("../models/favorites_bus_stops");

async function createFavoriteBusStop(id_bus_stop, id_user, label) {

  let favorite_bus_stop = null;

  try {
    favorite_bus_stop = await Favorite_Bus_Stop.create({
      id_bus_stop,
      id_user, 
      label
    });
    return favorite_bus_stop;
  } catch (error) {
    throw new Error(error);
  }
}

async function findFavoriteBusStop(id_favorite_bus_stop) {
  let favorite_bus_stop = null;

  try {
    favorite_bus_stop = await Favorite_Bus_Stop.findOne({
      raw: true, // ???
      // nest: true,
      where: id_favorite_bus_stop
    });
    return favorite_bus_stop;
  } catch (error) {
    throw new Error(error);
  }
}

async function findFavoritesBusStops() {
  let favorites_bus_stops = null;

  try {
    favorites_bus_stops = await Favorite_Bus_Stop.findAll({
      raw: true,
    });

    return favorites_bus_stops;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateFavoriteBusStop(id_favorite_bus_stop, obj) {
  let favorite_bus_stop = null;

  try {
    favorite_bus_stop = await Favorite_Bus_Stop.update(obj, {
      where: id_favorite_bus_stop
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteFavoriteBusStop(id_favorite_bus_stop){
    try{
        await Favorite_Bus_Stop.destroy({
            where: id_favorite_bus_stop
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createFavoriteBusStop,
  findFavoriteBusStop,
  findFavoritesBusStops,
  updateFavoriteBusStop,
  deleteFavoriteBusStop
};
