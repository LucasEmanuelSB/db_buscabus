const express = require("express");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Users = require("../models/users");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../config.json");
const Persons = require("../models/persons");
const Bus_Drivers = require("../models/bus_drivers");
const Companys = require("../models/companys");

function generateAuthToken(email) {
  const token = jwt.sign({ email }, config.secure, {
    expiresIn: 60 * 60 * 24,
  });

  return token;
}

router.post("/", async (req, res) => {

  const { email, password } = req.body;
  
  try {
    const user = await Users.findOne({
      raw: true,
      nest: true,
      where: { email: email },
      include: [
        {
        model: Persons,
        as: 'person'
        },
        {
        model: Bus_Drivers,
        as: 'ratings_bus_drivers',
        attributes: ['id','name'],
        through: [{ atributes: ['rate']}]
        },
        {
        model: Companys,
        as: 'ratings_companys',
        attributes: ['id','name'],
        through: [{ atributes: ['rate']}]
        },
    ],
    });

    if (!user) 
      return res.status(400).send("Usuario nulo");

    console.log("post password: ", password);
    console.log("auth password: ", user.password);

    const validPassword = await bcrypt.compare(password, user.password);

    console.log(validPassword)
    console.log("\n\n\n");
    console.log("post email: ", email);
    console.log("auth email: ", user.email);
    console.log("\n\n\n");

    if (!validPassword) 
      return res.status(400).send("Invalid Email/Password");

    const token = generateAuthToken(email);

    return res
      .header("token", token)
      .send(user);
  } catch (error) {
    console.log(error);
    throw new Error(error);
    return res.send(error);
  }
});

module.exports = router;
