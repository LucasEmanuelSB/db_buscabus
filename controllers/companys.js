const Company = require("../models/companys");

async function createCompany(name, average_rate) {

  let company = null;

  try {
    company = await Company.create({
      name,
      average_rate
    });
    return company;
  } catch (error) {
    throw new Error(error);
  }
}

async function findCompany(id_company) {
  let company = null;

  try {
    company = await Company.findOne({
      raw: true, // ???
      // nest: true,
      where: id_company
    });
    return company;
  } catch (error) {
    throw new Error(error);
  }
}

async function findCompanys() {
  let companys = null;

  try {
    companys = await Company.findAll({
      raw: true,
    });

    return companys;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateCompany(id_company, obj) {
  let company = null;

  try {
    company = await Company.update(obj, {
      where: id_company
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteCompany(id_company){
    try{
        await Company.destroy({
            where: id_company
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createCompany,
  findCompany,
  findCompanys,
  updateCompany,
  deleteCompany
};
