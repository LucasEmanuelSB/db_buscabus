const Favorite_Itinerary = require("../models/favorites_itinerarys");

async function createFavoriteItinerary(id_user, id_itinerary, label) {

  let favorite_itinerary = null;

  try {
    favorite_itinerary = await Favorite_Itinerary.create({
        id_user, 
        id_itinerary, 
        label
    });
    return favorite_itinerary;
  } catch (error) {
    throw new Error(error);
  }
}

async function findFavoriteItinerary(id_favorite_itinerary) {
  let favorite_itinerary = null;

  try {
    favorite_itinerary = await Favorite_Itinerary.findOne({
      raw: true, // ???
      // nest: true,
      where: id_favorite_itinerary
    });
    return favorite_itinerary;
  } catch (error) {
    throw new Error(error);
  }
}

async function findFavoritesItinerarys() {
  let favorites_itinerarys = null;

  try {
    favorites_itinerarys = await Favorite_Itinerary.findAll({
      raw: true,
    });

    return favorites_itinerarys;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateFavoriteItinerary(id_favorite_itinerary, obj) {
  let favorite_itinerary = null;

  try {
    favorite_itinerary = await Favorite_Itinerary.update(obj, {
      where: id_favorite_itinerary
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteFavoriteItinerary(id_favorite_itinerary){
    try{
        await Favorite_Itinerary.destroy({
            where: id_favorite_itinerary
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createFavoriteItinerary,
  findFavoriteItinerary,
  findFavoritesItinerarys,
  updateFavoriteItinerary,
  deleteFavoriteItinerary
};
