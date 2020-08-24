const Rating_Bus_Driver = require("../models/ratings_bus_drivers");

async function createRatingBusDriver(id_bus_driver, id_user, rate) {

  let rating_bus_driver = null;

  try {
    rating_bus_driver = await Rating_Bus_Driver.create({
      id_bus_driver, 
      id_user, 
      rate
    });
    return rating_bus_driver;
  } catch (error) {
    throw new Error(error);
  }
}

async function findRatingBusDriver(id_rating_bus_driver) {
  let rating_bus_driver = null;

  try {
    rating_bus_driver = await Rating_Bus_Driver.findOne({
      raw: true, // ???
      // nest: true,
      where: id_rating_bus_driver
    });
    return rating_bus_driver;
  } catch (error) {
    throw new Error(error);
  }
}

async function findRatingsBusDrivers() {
  let ratings_bus_drivers = null;

  try {
    ratings_bus_drivers = await Rating_Bus_Driver.findAll({
      raw: true,
    });

    return ratings_bus_drivers;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateRatingBusDriver(id_rating_bus_driver, obj) {
  let rating_bus_driver = null;

  try {
    rating_bus_driver = await Rating_Bus_Driver.update(obj, {
      where: id_rating_bus_driver
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteRatingBusDriver(id_rating_bus_driver){
    try{
        await Rating_Bus_Driver.destroy({
            where: id_rating_bus_driver
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createRatingBusDriver,
  findRatingBusDriver,
  findRatingsBusDrivers,
  updateRatingBusDriver,
  deleteRatingBusDriver
};
