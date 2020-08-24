const Bus_Driver = require("../models/bus_drivers");

async function createBusDriver(id_bus,average_rate) {

  let bus_driver = null;

  try {
    bus_driver = await Bus_Driver.create({
     id_bus,
     average_rate
    });
    return bus_driver;
  } catch (error) {
    throw new Error(error);
  }
}

async function findBusDriver(id_bus_driver) {
  let bus_driver = null;

  try {
    bus_driver = await Bus_Driver.findOne({
      raw: true, // ???
      // nest: true,
      where: id_bus_driver
    });
    return bus_driver;
  } catch (error) {
    throw new Error(error);
  }
}

async function findBusDrivers() {
  let bus_drivers = null;

  try {
    bus_drivers = await Bus_Driver.findAll({
      raw: true,
    });

    return bus_drivers;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateBusDriver(id_bus_driver, obj) {
  let bus_driver = null;

  try {
    bus_driver = await Bus_Driver.update(obj, {
      where: id_bus_driver
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteBusDriver(id_bus_driver){
    try{
        await Bus_Driver.destroy({
            where: id_bus_driver
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createBusDriver,
  findBusDriver,
  findBusDrivers,
  updateBusDriver,
  deleteBusDriver
};
