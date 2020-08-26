const express = require("express");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Users = require("../models/users");
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
      //nest: true,
      where: { email: email }
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

    return res
      .header("token", token)
      .send(_.pick(user, ["id", "name", "surname", "gender", "job" ,"birth_date", "email", "credits", "is_online", "device_adress"]));
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
