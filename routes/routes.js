const express = require("express");
const router = express.Router();
const Routes = require("../models/routes");
const BusStops = require("../models/busStops");
const Adresses = require("../models/adresses");
const Itinerarys = require("../models/itinerarys");
const Buses = require("../models/buses");

router.post("/", async (req, res) => {
  try {
    Routes.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const routes = await Routes.findAll({
      nest: true,
      attributes: ['id'],
      include: [{
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
        through: { atributes: []}, 
        include: [{
          model: Adresses,
          as: 'adress'
        }]
      },
      {
        model: Itinerarys,
        as: 'itinerarys',
        atributes: ['id'],
        include: [{
            model: Buses,
            as: 'bus',
            atributes: ['id','line']
        }]
      }
    ]
    });
      return res.status(200).send(routes);
  } catch (error) {
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const route = await Routes.findOne({
      nest: true,
      //raw: true,
      where: {id: req.params.id},
      attributes: ['id'],
      include: [{
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
        through: { atributes: []}, 
        include: [{
          model: Adresses,
          as: 'adress'
        }]
      },
      {
        model: Itinerarys,
        as: 'itinerarys',
        atributes: ['id'],
        include: [{
            model: Buses,
            as: 'bus',
            atributes: ['id','line']
        }]
      }
    ]
    });
    return res.status(200).send(route);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const route = await Routes.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(route);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Routes.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
