const express = require("express");
const Users_Bus_Drivers = require("../models/users_bus_drivers");
const router = express.Router();

router.post("/", async (req, res) => {

    const {id_user, id_bus_driver} = req.body;
    const user_bus_driver = null;

    try {
        user_bus_driver = Users_Bus_Drivers.create({
        id_user,
        id_bus_driver
      });
  
      return res.status(200).send(user_bus_driver);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Ocorreu um erro interno");
  }
});

router.get("/", async (req,res) => {
  try {
    const users_bus_drivers = await Users_Bus_Stops.findAll({
      raw: true,
    });
      return res.status(200).send(users_bus_drivers);
  } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
}});

router.get("/:id", async (req, res) => {
  try {
    const users_bus_drivers = await Users_Bus_Drivers.findOne({
      raw: true, // ???
      // nest: true,
      where: {id: req.params.id},
    });
    return res.status(200).send(users_bus_drivers);
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Users_Bus_Drivers.update(req.body,
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
      await Users_Bus_Drivers.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
