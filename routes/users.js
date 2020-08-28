const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const Bus = require("../models/bus");
const Bus_Stops = require("../models/bus_stops");
const Itinerarys = require("../models/itinerarys");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    req.body.password = hashedPassword;
    
    const user = await Users.create(req.body);
    return res.status(200).send("Criado com sucesso");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Ocorreu um erro interno");
  }
});

router.get("/", async (req,res) => {
  try {
    const users = await Users.findAll({
      raw: true,
    });
      return res.status(200).send(users);
  } catch (error) {
      return res.status(500).send("internal server error");
}});

router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findOne({
      raw: true, // ???
      // nest: true,
      where: {id: req.params.id},
      include: [
        {model: Itinerarys, as: 'favorites_itinerarys' },
        {model: Bus, as: 'favorites_bus' }
      ]
    });
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Users.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(true);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error");
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
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
