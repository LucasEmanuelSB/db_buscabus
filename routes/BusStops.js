const express = require("express");
const router = express.Router();
const BusStops = require("../models/BusStops");
const Adresses = require("../models/Adresses");
const Routes = require("../models/Routes");

router.post("/", async (req, res) => {
  try {
    BusStops.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const busStops = await BusStops.findAll({
      nest: true,
      //raw: true,
      attributes: ['id','isTerminal','latitude','longitude'],
      include: [
        {
        model: Adresses,
        as: 'adress'
        },
        {
        model: Routes,
        as: 'routes', through: [ {attributes: []}]
        },
    ],
      //include: [ {all: true, through: {attributes: []} }, ]
    });
      return res.status(200).send(busStops);
  } catch (error) {
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const busStop = await BusStops.findOne({
      //raw: true, 
      nest: true,
      where: {id: req.params.id},
      attributes: ['id','isTerminal','latitude','longitude'],
      include: [
        {
        model: Adresses,
        as: 'adress'
        },
        {
        model: Routes,
        as: 'routes',
        through: [ {attributes: []}]
        },
    ]
      /* include: [ {all: true, through: {attributes: []} }, ] */
    });
    return res.status(200).send(busStop);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const busStop = await BusStops.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(busStop);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await BusStops.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
