const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const bcrypt = require("bcrypt");
const Persons = require("../models/persons");

router.post("/", async (req, res) => {

  const email = req.body.email;
  try {
    let user = await Users.findOne({where: {email: email}});
    if(user){
      return res.send("email ja cadastrado");
    } else {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    req.body.password = hashedPassword;
    
    let user = await Users.create(req.body);
    return res.status(200).send(req.body);

    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const users = await Users.findAll({
      nest: true,
      include: [{model: Persons}],
      include: [ {all: true, through: {attributes: []} }, ]
    });
      return res.status(200).send(users);
  } catch (error) {
    console.log(error);
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findOne({
      nest: true,
      raw: true,
      where: {id: req.params.id},
      include: [ {all: true, through: {attributes: []} }, ]
    });
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await Users.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Users.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
