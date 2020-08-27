const express = require("express");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Users = require("../models/users");
const Users_Bus = require("../models/users_bus");
const Users_Bus_Drivers = require("../models/users_bus_drivers");
const Users_Bus_Stops = require("../models/users_bus_stops");
const Users_Companys = require("../models/users_companys");
const Users_Itinerarys = require("../models/users_itinerarys");
const router = express.Router();

function generateAuthToken(email) {
  const token = jwt.sign({ email }, config.secure, {
    expiresIn: 60 * 60 * 24,
  });

  return token;
}

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  let user = null;
  try {
    user = await Users.findOne({
      raw: true, 
      nest: true,
      where: { email: email },
      include: [
      { model: Users_Bus,         as: 'favorites_bus'},
      { model: Users_Bus_Drivers, as: 'ratings_bus_drivers'},
      { model: Users_Bus_Stops,   as: 'favorites_bus_stops'},
      { model: Users_Companys,    as: 'rating_company'},
      { model: Users_Itinerarys,  as: 'favorites_itinerarys'}
      ]
    });
    //user = await findUser(email);

    if (!user) return res.status(400).send("Invalid Email/Password");

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) return res.status(400).send("Invalid Email/Password");

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
    throw new Error(error);
  }
});

module.exports = router;
