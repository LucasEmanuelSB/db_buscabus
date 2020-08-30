const express = require("express");
const Users_Bus_Drivers = require("../models/users_bus_drivers");
const router = express.Router();

router.post("/", async (req, res) => {
  
  try {
    await Users_Bus_Drivers.create(req.body);
      return res.status(200).send(req.body);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const users_bus_drivers = await Users_Bus_Drivers.findAll({});
      return res.status(200).send(users_bus_drivers);
  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const users_bus_drivers = await Users_Bus_Drivers.findOne({
      where: {id: req.params.id},
    });
    return res.status(200).send(users_bus_drivers);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user_bus_driver = await Users_Bus_Drivers.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(user_bus_driver);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Users_Bus_Drivers.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
