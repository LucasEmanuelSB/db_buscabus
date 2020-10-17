const express = require("express");
const router = express.Router();
const Buses = require("../models/Buses");
const GlobalPositions = require("../models/GlobalPositions");
const Persons = require("../models/Persons");
const Itinerarys = require("../models/Itinerarys");
const BusDrivers = require("../models/BusDrivers");
const Routes = require("../models/Routes");
const Calendars = require("../models/Calendars");
const BusStops = require("../models/BusStops");
const Adresses = require("../models/Adresses");

router.post("/", async (req, res) => {
  try {
    Buses.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    let buses = await Buses.findAll({
      //raw: true,
      nest: true,
      attributes: ['id', 'line', 'isAvailable'],
      include: [
        {
          model: BusDrivers,
          as: 'busDriver'
        },
        {
          model: Itinerarys,
          as: 'itinerary',
          include: [
            {
              model: Routes,
              as: 'route',
              include: [{
                model: BusStops,
                as: 'busStops',
                through: [{ attributes: [] }],
                include: [{
                  model: Adresses,
                  as: 'adress',
                }]
              }],
            },
            {
              model: Calendars,
              as: 'calendar'
            },
          ]
        },
        {
          model: GlobalPositions,
          as: 'currentPosition',
        },
        {
          model: Persons,
          as: 'persons'
        }
      ]
    });
    return res.status(200).send(buses);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/short/", async (req, res) => {
  try {
    let buses = await Buses.findAll({
      //raw: true,
      nest: true,
      attributes: ['id', 'line', 'isAvailable'],
      include: [
        {
          model: BusDrivers,
          as: 'busDriver'
        },
        {
          model: Itinerarys,
          as: 'itinerary',
          include: [
            {
              model: Calendars,
              as: 'calendar'
            },
          ]
        },
      ]
    });
    return res.status(200).send(buses);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/short/:id", async (req, res) => {
  try {
    const bus = await Buses.findOne({

      nest: true,
      where: { id: req.params.id },
      attributes: ['id', 'line', 'isAvailable'],
      include: [
        {
          model: BusDrivers,
          as: 'busDriver'
        },
        {
          model: Itinerarys,
          as: 'itinerary',
          include: [
            {
              model: Calendars,
              as: 'calendar'
            },
          ]
        },
      ]
    });
    return res.status(200).send(bus);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const bus = await Buses.findOne({

      nest: true,
      where: { id: req.params.id },
      attributes: ['id', 'line', 'isAvailable'],
      include: [
        {
          model: BusDrivers,
          as: 'busDriver'
        },
        {
          model: Itinerarys,
          as: 'itinerary',
          include: [
            {
              model: Routes,
              as: 'route',
              include: [{
                model: BusStops,
                as: 'busStops',
                through: [{ attributes: [] }],
                include: [{
                  model: Adresses,
                  as: 'adress',
                }]
              }],
            },
            {
              model: Calendars,
              as: 'calendar'
            },
          ]
        },
        {
          model: GlobalPositions,
          as: 'currentPosition',
        },
        {
          model: Persons,
          as: 'persons'
        }
      ]
    });
    return res.status(200).send(bus);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const bus = await Buses.update(req.body,
      { where: { id: req.params.id } }
    );
    return res.status(200).send(bus);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
  try {
    await Buses.destroy({
      where: { id: req.params.id },
    });
    return res.status(200).send("Deletado com sucesso");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
