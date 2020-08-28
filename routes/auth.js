const express = require("express");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Users = require("../models/users");
const Bus = require("../models/bus");
const Bus_Drivers = require("../models/bus_drivers");
const Bus_Stops = require("../models/bus_stops");
const Companys = require("../models/companys");
const Itinerarys = require("../models/itinerarys");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../config.json");

function generateAuthToken(email) {
  const token = jwt.sign({ email }, config.secure, {
    expiresIn: 60 * 60 * 24,
  });

  return token;
}

router.post("/", async (req, res) => {
  const { email, password } = req.body;
   user = null;
  try {
    const user = await Users.findOne({
      raw: true, 
      nest: true,
      where: { email: email },
      include: [
      { model: Bus,         as: 'favorites_bus', attributes: [ ] , through: { attributes: [ 'is_favorite'] } },
      { model: Bus_Drivers, as: 'ratings_bus_drivers', attributes: [ ] ,through: { attributes: ['rate'] } },
      { model: Bus_Stops,   as: 'favorites_bus_stops', attributes: [ ] ,through: { attributes: ['is_favorite'] } },
      { model: Companys,    as: 'ratings_company', attributes: [ ] ,through: { attributes: ['rate'] } },
      { model: Itinerarys,  as: 'favorites_itinerarys', attributes: [ ] ,through: { attributes: ['is_favorite'] } } 
      ]
    });
    //user = await findUser(email);

    if (!user) 
      return res.status(400).send("Usuario nulo");

    console.log("post password: ", password);
    console.log("auth password: ", user.password);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const validPassword = await bcrypt.compare(password, user.password);

    console.log(validPassword)
    console.log("\n\n\n");
    console.log("post email: ", email);
    console.log("auth email: ", user.email);
    console.log("\n\n\n");

    if (!validPassword) 
      return res.status(400).send("Invalid Email/Password");

    const token = generateAuthToken(email);

    // return res.send({
    //   user: _.pick(user, ["id", "full_name", "gender", "birth_date", "email"]),
    //   token,
    // });
    //_.pick(user, ["id", "name", "surname", "gender", "job" ,"birth_date", "email", "credits", "", ""])
    return res
      .header("token", token)
      .send(user);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
});

module.exports = router;
