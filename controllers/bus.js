const Bus = require("../models/bus");

async function createBus(line,is_available) {

  let bus = null;

  try {
    bus = await Bus.create({
      line,
      is_available,
    });
    return bus;
  } catch (error) {
    throw new Error(error);
  }
}

async function findBus(id_bus) {
  let bus = null;

  try {
    bus = await Bus.findOne({
      raw: true, // ???
      // nest: true,
      where: id_bus
    });
    return bus;
  } catch (error) {
    throw new Error(error);
  }
}

async function findBuses() {
  let buses = null;

  try {
    buses = await Bus.findAll({
      raw: true,
    });

    return buses;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateBus(id_bus, obj) {
  let bus = null;

  try {
    bus = await Bus.update(obj, {
      where: id_bus
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteBus(id_bus){
    try{
        await Bus.destroy({
            where: id_bus
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createBus,
  findBus,
  findBuses,
  updateBus,
  deleteBus
};
