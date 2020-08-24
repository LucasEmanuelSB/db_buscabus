const Rating_Company = require("../models/ratings_companys");

async function createRatingCompany(id_company, id_user, rate) {

  let rating_company = null;

  try {
    rating_company = await Rating_Company.create({
      id_company, 
      id_user, 
      rate
    });
    return rating_company;
  } catch (error) {
    throw new Error(error);
  }
}

async function findRatingCompany(id_rating_company) {
  let rating_company = null;

  try {
    rating_company = await Rating_Company.findOne({
      raw: true, // ???
      // nest: true,
      where: id_rating_company
    });
    return rating_company;
  } catch (error) {
    throw new Error(error);
  }
}

async function findRatingsCompanys() {
  let ratings_companys = null;

  try {
    ratings_companys = await Rating_Company.findAll({
      raw: true,
    });

    return ratings_companys;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateRatingCompany(id_rating_company, obj) {
  let rating_company = null;

  try {
    rating_company = await Rating_Company.update(obj, {
      where: id_rating_company
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteRatingCompany(id_rating_company){
    try{
        await Rating_Company.destroy({
            where: id_rating_company
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createRatingCompany,
  findRatingCompany,
  findRatingsCompanys,
  updateRatingCompany,
  deleteRatingCompany
};
