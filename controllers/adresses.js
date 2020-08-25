const Adress = require("../models/adresses");

async function createAdress(country, uf, city, neighborhood, street, cep) {

  let adress = null;

  try {

    return adress;
  } catch (error) {
    throw new Error(error);
  }
}

async function findAdress(id_adress) {
  let adress = null;

  try {
    adress = await Adress.findOne({
      raw: true, // ???
      // nest: true,
      where: id_adress
    });
    return adress;
  } catch (error) {
    throw new Error(error);
  }
}

async function findAdresses() {
  let adresses = null;

  try {
    

    return adresses;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateAdress(id_adress, obj) {
  try {

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteAdress(id_adress){
    try{
        await Adress.destroy({
            where: id_adress
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createAdress,
  findAdress,
  findAdresses,
  updateAdress,
  deleteAdress
};
