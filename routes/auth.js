const express = require("express");
const _ = require("lodash");
const bcrypt = require("bcrypt");

const router = express.Router();
const { findUser, generateAuthToken } = require("../controllers/users");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  let user = null;

  try {
    user = await findUser(email);

    if (!user) return res.status(400).send("Wrong Email/Password");

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) return res.status(400).send("Wrong Email/Password");

    const token = generateAuthToken(email);

    // return res.send({
    //   user: _.pick(user, ["id", "full_name", "gender", "birth_date", "email"]),
    //   token,
    // });

    return res
      .header("token", token)
      .send(_.pick(user, ["id", "full_name", "gender", "birth_date", "email"]));
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
