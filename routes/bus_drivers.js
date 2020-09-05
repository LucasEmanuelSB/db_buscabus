const express = require("express");
const router = express.Router();
const Bus_Drivers = require("../models/bus_drivers");

router.post("/", async (req, res) => {
  try {
    Bus_Drivers.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const bus_drivers = await Bus_Drivers.findAll({
      nest: true,
      //include: [{all: true}]
    });
      return res.status(200).send(bus_drivers);
  } catch (error) {
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const bus_driver = await Bus_Drivers.findOne({
      nest: true,
      where: {id: req.params.id},
      include: [{all: true}]
    });
    return res.status(200).send(bus_driver);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const bus_driver = await Bus_Drivers.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(bus_driver);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error");
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Bus_Drivers.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
