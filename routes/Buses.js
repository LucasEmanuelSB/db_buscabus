const express = require("express");
const router = express.Router();
const Buses = require("../models/buses");
const GlobalPositions = require("../models/globalPositions");
const Itinerarys = require("../models/itinerarys");
const BusDrivers = require("../models/busDrivers");
const Routes = require("../models/routes");
const Calendars = require("../models/calendars");
const BusStops = require("../models/busStops");
const Adresses = require("../models/adresses");

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
      attributes: ['id', 'line', 'isAvailable', 'velocity', 'nDevices'],
      include: [
        {
          model: BusDrivers,
          as: 'busDriver'
        },
        {
          model: Itinerarys,
          as: 'itinerary',
          atributes: [],
          include: [
            {
              model: Calendars,
              as: 'calendar'
            },
            {
              model: Routes,
              as: 'route',
              through: { atributes: [] },
              include: [
                {
                  model: BusStops,
                  as: 'start',
                  attributes: ['id', 'isTerminal', 'latitude', 'longitude'],
                  include: [{
                    model: Adresses,
                    as: 'adress',
                    atributes: ['neighborhood', 'street']
                  }]
                },
                {
                  model: BusStops,
                  as: 'end',
                  attributes: ['id', 'isTerminal', 'latitude', 'longitude'],
                  include: [{
                    model: Adresses,
                    as: 'adress',
                    atributes: ['neighborhood', 'street']
                  }]
                },
                {
                  model: BusStops,
                  as: 'path',
                  attributes: ['id', 'isTerminal', 'latitude', 'longitude'],
                  through: { atributes: [] },
                  include: [{
                    model: Adresses,
                    as: 'adress',
                    atributes: ['neighborhood', 'street']
                  }]
                },
              ]
            }
          ]
        },
        {
          model: GlobalPositions,
          as: 'currentPosition',
          atributes: ['id', 'latitude', 'longitude']
        },
      ]
    });
    return res.status(200).send(buses);
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
      attributes: ['id', 'line', 'isAvailable', 'velocity', 'nDevices'],
      include: [
        {
          model: BusDrivers,
          as: 'busDriver'
        },
        {
          model: Itinerarys,
          as: 'itinerary',
          atributes: [],
          include: [
            {
              model: Calendars,
              as: 'calendar'
            },
            {
              model: Routes,
              as: 'route',
              through: { atributes: [] },
              include: [
                {
                  model: BusStops,
                  as: 'start',
                  attributes: ['id', 'isTerminal', 'latitude', 'longitude'],
                  include: [{
                    model: Adresses,
                    as: 'adress',
                    atributes: ['neighborhood', 'street']
                  }]
                },
                {
                  model: BusStops,
                  as: 'end',
                  attributes: ['id', 'isTerminal', 'latitude', 'longitude'],
                  include: [{
                    model: Adresses,
                    as: 'adress',
                    atributes: ['neighborhood', 'street']
                  }]
                },
                {
                  model: BusStops,
                  as: 'path',
                  attributes: ['id', 'isTerminal', 'latitude', 'longitude'],
                  through: { atributes: [] },
                  include: [{
                    model: Adresses,
                    as: 'adress',
                    atributes: ['neighborhood', 'street']
                  }]
                },
              ]
            }
          ]
        },
        {
          model: GlobalPositions,
          as: 'currentPosition',
          atributes: ['id', 'latitude', 'longitude']
        },
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
