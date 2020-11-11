const express = require("express");
const router = express.Router();
const Buses = require("../models/buses");
const RealTimeData = require("../models/realTimeData");
const Itinerarys = require("../models/itinerarys");
const BusDrivers = require("../models/busDrivers");
const Routes = require("../models/routes");
const Calendars = require("../models/calendars");
const BusStops = require("../models/busStops");
const Adresses = require("../models/adresses");

router.post("/", async (req, res) => {      // Requisição POST
  try {                                     // Tentativa de excecução:
    Buses.create(req.body);                 //    Cria um modelo com base no body (JSON) recebido
    return res.status(200).send(req.body);  //    Envia o código de estado e o body (JSON) de volta.
  } catch (error) {                         // Possui erro ? Captura erro
    return res.status(500).send(error);     //    Envia o código de estado da requisção e o erro.
  }
});

router.get("/", async (req, res) => {       // Requisição GET
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
          atributes: ['id'],
          include: [
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
                  through: {atributes: []},
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
          model: RealTimeData,
          as: 'realTimeData',
          atributes: ['id', 'latitude', 'longitude','velocity','nDevices']
        },
      ]
    });
    return res.status(200).send(buses);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {    // Requisição GET pelo id
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
          atributes: ['id'],
          include: [
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
          model: RealTimeData,
          as: 'realTimeData',
          atributes: ['id', 'latitude', 'longitude','velocity','nDevices']
        },
      ]
    });
    return res.status(200).send(bus);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {    // Requisição PUT
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

router.delete("/:id", async (req, res) => { // Requisição DELETE
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
