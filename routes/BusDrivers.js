const express = require("express");
const router = express.Router();
const BusDrivers = require("../models/busDrivers");
const Buses = require("../models/buses");

router.post("/", async (req, res) => {
  try {
    BusDrivers.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const busDrivers = await BusDrivers.findAll({
      nest: true,
      //raw: true,
      include: [
        {
          model: Buses,
          as: 'buses',
          attributes: ['id']
        }
       ]
    });
      return res.status(200).send(busDrivers);
  } catch (error) {
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const busDriver = await BusDrivers.findOne({
      nest: true,
      where: {id: req.params.id},
      attributes: ['id','name','averageRate'],
      include: [
        {
          model: Buses,
          as: 'buses',
          attributes: ['id']
        }
       ]
    });
    return res.status(200).send(busDriver);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const busDriver = await BusDrivers.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(busDriver);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error");
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await BusDrivers.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
