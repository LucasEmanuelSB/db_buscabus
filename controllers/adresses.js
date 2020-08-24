const Adress = require("../models/adress");

async function createAdress(country, uf, city, neighborhood, street, cep) {

  let adress = null;

  try {
    adress = await Adress.create({
      country,
      uf,
      city, 
      neighborhood, 
      street, 
      cep
    });
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
    adresses = await Adress.findAll({
      raw: true,
    });

    return adresses;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateAdress(id_adress, obj) {
  let adress = null;

  try {
    adress = await Adress.update(obj, {
      where: id_adress
    });
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
