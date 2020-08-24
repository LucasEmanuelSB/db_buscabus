const User = require("../models/users");
const bcrypt = require("bcrypt");
const Users = require("../models/Users");
const jwt = require("jsonwebtoken");
const config = require("../config.json");

async function createUser(name, surname, email, password, birth_date, genre, job, credits, is_online, device_adress) {

  let user = null;

  try {
    user = await User.create({
      name, 
      surname, 
      email, 
      password, 
      birth_date, 
      genre, 
      job, 
      credits, 
      is_online, 
      device_adress
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
}

async function findUser(id_user) {
  let user = null;

  try {
    user = await User.findOne({
      raw: true, // ???
      // nest: true,
      where: id_user
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
}

async function findUsers() {
  let users = null;

  try {
    users = await User.findAll({
      raw: true,
    });

    return users;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateUser(id_user, obj) {
  let user = null;

  try {
    user = await User.update(obj, {
      where: id_user
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteUser(id_user){
    try{
        await User.destroy({
            where: id_user
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

function generateAuthToken(email) {
  const token = jwt.sign({ email }, config.secure, {
    expiresIn: 60 * 60 * 24,
  });

  return token;
}
module.exports = {
  createUser,
  findUser,
  findUsers,
  updateUser,
  deleteUser,
  generateAuthToken
};
