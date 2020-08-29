const express = require("express");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Users = require("../models/users");
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
  
  try {
    const user = await Users.findOne({
      nest: true,
      where: { email: email },
      include: [{all: true,through: {attributes: [ ]}}]
    });

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

    return res
      .header("token", token)
      .send(user);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
});

module.exports = router;
