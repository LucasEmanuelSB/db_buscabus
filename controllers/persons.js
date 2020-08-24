const Person = require("../models/persons");

async function createPerson(device_adress) {

  let person = null;

  try {
    person = await Person.create({
        device_adress
    });
    return person;
  } catch (error) {
    throw new Error(error);
  }
}

async function findPerson(id_person) {
  let person = null;

  try {
    person = await Person.findOne({
      raw: true, // ???
      // nest: true,
      where: id_person
    });
    return person;
  } catch (error) {
    throw new Error(error);
  }
}

async function findPersons() {
  let persons = null;

  try {
    persons = await Person.findAll({
      raw: true,
    });

    return persons;
  } catch (error) {
    throw new Error(error);
  }
}

async function updatePerson(id_person, obj) {
  let person = null;

  try {
    person = await Person.update(obj, {
      where: id_person
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deletePerson(id_person){
    try{
        await Person.destroy({
            where: id_person
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createPerson,
  findPerson,
  findPersons,
  updatePerson,
  deletePerson
};
