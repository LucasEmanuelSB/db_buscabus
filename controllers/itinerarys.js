const Itinerary = require("../models/itinerarys");

async function createItinerary(id_bus, id_route, date, time, id_start_adress, id_end_adress) {

  let itinerary = null;

  try {
    itinerary = await Itinerary.create({
        id_bus, 
        id_route, 
        date, time, 
        id_start_adress, 
        id_end_adress 
    });
    return itinerary;
  } catch (error) {
    throw new Error(error);
  }
}

async function findItinerary(id_itinerary) {
  let itinerary = null;

  try {
    itinerary = await Itinerary.findOne({
      raw: true, // ???
      // nest: true,
      where: id_itinerary
    });
    return itinerary;
  } catch (error) {
    throw new Error(error);
  }
}

async function findItinerarys() {
  let itinerarys = null;

  try {
    itinerarys = await Itinerary.findAll({
      raw: true,
    });

    return itinerarys;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateItinerary(id_itinerary, obj) {
  let itinerary = null;

  try {
    itinerary = await Itinerary.update(obj, {
      where: id_itinerary
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteItinerary(id_itinerary){
    try{
        await Itinerary.destroy({
            where: id_itinerary
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createItinerary,
  findItinerary,
  findItinerarys,
  updateItinerary,
  deleteItinerary
};
