const express = require("express");
const router = express.Router();
const Bus_Stops = require("../models/bus_stops");
const Adress = require("../models/adresses");

router.post("/", async (req, res) => {
  try {
    Bus_Stops.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const bus_stops = await Bus_Stops.findAll({
      nest: true,
      //raw: true,
      include: [ {all: true, through: {attributes: []} }, ]
    });
      return res.status(200).send(bus_stops);
  } catch (error) {
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const bus_stop = await Bus_Stops.findOne({
      raw: true, 
      nest: true,
      where: {id: req.params.id},
      include: [ {all: true, through: {attributes: []} }, ]
    });
    return res.status(200).send(bus_stop);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const bus_stop = await Bus_Stops.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(bus_stop);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Bus_Stops.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
