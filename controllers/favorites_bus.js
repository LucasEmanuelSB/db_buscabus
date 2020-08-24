const Favorite_Bus = require("../models/favorites_bus");

async function createFavoriteBus(id_bus, id_user, label) {

  let favorite_bus = null;

  try {
    favorite_bus = await Favorite_Bus.create({
        id_bus, 
        id_user, 
        label
    });
    return favorite_bus;
  } catch (error) {
    throw new Error(error);
  }
}

async function findFavoriteBus(id_favorite_bus) {
  let favorite_bus = null;

  try {
    favorite_bus = await Favorite_Bus.findOne({
      raw: true, // ???
      // nest: true,
      where: id_favorite_bus
    });
    return favorite_bus;
  } catch (error) {
    throw new Error(error);
  }
}

async function findFavoritesBus() {
  let favorites_bus = null;

  try {
    favorites_bus = await Favorite_Bus.findAll({
      raw: true,
    });

    return favorites_bus;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateFavoriteBus(id_favorite_bus, obj) {
  let favorite_bus = null;

  try {
    favorite_bus = await Favorite_Bus.update(obj, {
      where: id_favorite_bus
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteFavoriteBus(id_favorite_bus){
    try{
        await Favorite_Bus.destroy({
            where: id_favorite_bus
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createFavoriteBus,
  findFavoriteBus,
  findFavoritesBus,
  updateFavoriteBus,
  deleteFavoriteBus
};
