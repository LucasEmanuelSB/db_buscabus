const express = require("express");
const router = express.Router();
const Itinerarys = require("../models/itinerarys");
const Routes = require("../models/routes");
const Calendars = require("../models/calendars");
const BusStops = require("../models/busStops");
const Buses = require("../models/buses");
const Adresses = require("../models/adresses");

router.post("/", async (req, res) => {
  try {
    Itinerarys.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const itinerarys = await Itinerarys.findAll({
      nest: true,
      attributes: ['id'],
      include: [
        {
          model: Buses,
          as: 'bus'
        },
        {
          model: Calendars,
          as: 'calendar'
        },
        {
          model: Routes,
          as: 'route',
          include: [
            {
              model: BusStops,
              as: 'start',
              attributes: ['id', 'isTerminal', 'latitude', 'longitude'],
              include: [{
                model: Adresses,
                as: 'adress'
              }]
            },
            {
              model: BusStops,
              as: 'end',
              attributes: ['id', 'isTerminal', 'latitude', 'longitude'],
              include: [{
                model: Adresses,
                as: 'adress'
              }]
            },
            {
              model: BusStops,
              as: 'path',
              attributes: ['id', 'isTerminal', 'latitude', 'longitude'],
              through: { atributes: [] },
              include: [{
                model: Adresses,
                as: 'adress'
              }]
            },
          ]
        }
      ]
    });
    return res.status(200).send(itinerarys);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const itinerary = await Itinerarys.findOne({
      nest: true,
      //raw: true,
      where: { id: req.params.id },
      attributes: ['id'],
      include: [
        {
          model: Buses,
          as: 'bus'
        },
        {
          model: Calendars,
          as: 'calendar'
        },
        {
          model: Routes,
          as: 'route',
          include: [
            {
              model: BusStops,
              as: 'start',
              attributes: ['id', 'isTerminal', 'latitude', 'longitude'],
              include: [{
                model: Adresses,
                as: 'adress'
              }]
            },
            {
              model: BusStops,
              as: 'end',
              attributes: ['id', 'isTerminal', 'latitude', 'longitude'],
              include: [{
                model: Adresses,
                as: 'adress'
              }]
            },
            {
              model: BusStops,
              as: 'path',
              attributes: ['id', 'isTerminal', 'latitude', 'longitude'],
              through: { atributes: [] },
              include: [{
                model: Adresses,
                as: 'adress'
              }]
            },
          ]
        }
      ]
    });
    return res.status(200).send(itinerary);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const itinerary = await Itinerarys.update(req.body,
      { where: { id: req.params.id } }
    );
    return res.status(200).send(itinerary);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
  try {
    await Itinerarys.destroy({
      where: { id: req.params.id },
    });
    return res.status(200).send("Deletado com sucesso");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
