const Global_Positon = require("../models/global_positions");

async function createGlobalPosition(id_bus, latitude, longitude, time, is_gps) {

  let global_position = null;

  try {
    global_position = await Global_Positon.create({
        id_bus, 
        latitude, 
        longitude, 
        time, 
        is_gps
    });
    return global_position;
  } catch (error) {
    throw new Error(error);
  }
}

async function findGlobalPosition(id_global_position) {
  let global_position = null;

  try {
    global_position = await Global_Positon.findOne({
      raw: true, // ???
      // nest: true,
      where: id_global_position
    });
    return global_position;
  } catch (error) {
    throw new Error(error);
  }
}

async function findGlobalPositions() {
  let global_positions = null;

  try {
    global_positions = await Global_Positon.findAll({
      raw: true,
    });

    return global_positions;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateGlobalPosition(id_global_position, obj) {
  let global_position = null;

  try {
    global_position = await Global_Positon.update(obj, {
      where: id_global_position
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteGlobalPosition(id_global_position){
    try{
        await Global_Positon.destroy({
            where: id_global_position
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createGlobalPosition,
  findGlobalPosition,
  findGlobalPositions,
  updateGlobalPosition,
  deleteGlobalPosition
};
