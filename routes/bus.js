const express = require("express");
const router = express.Router();
const Bus = require("../models/bus");
const Global_Positions = require("../models/global_positions");
const Sequelize = require("sequelize");
const { max } = require("../models/bus");
const { json } = require("sequelize");
const Persons = require("../models/persons");
const Itinerarys = require("../models/itinerarys");
const Bus_Drivers = require("../models/bus_drivers");

router.post("/", async (req, res) => {
  try {
    Bus.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    let buses = await Bus.findAll({
      nest: true,
      attributes: ['id','line','is_available'],
      include: [
        {
        model: Bus_Drivers,
        as: 'bus_driver'
        },
        {
        model: Itinerarys,
        as: 'itinerary'
        },
        {
        model: Global_Positions,
        as: 'current_position', through: [ {attributes: []}]
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
}});

router.get("/:id", async (req, res) => {
  try {
    const bus = await Bus.findOne({
      nest: true,
      where: {id: req.params.id},
      attributes: ['id','line','is_available'],
      include: [
        {
        model: Bus_Drivers,
        as: 'bus_driver'
        },
        {
        model: Itinerarys,
        as: 'itinerary'
        },
        {
        model: Global_Positions,
        as: 'current_position', through: [ {attributes: []}]
        },
        {
        model: Persons,
        as: 'persons'
        }
      ]});
    return res.status(200).send(bus);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/:id/historic_position", async (req, res) => {
  try {
    const bus = await Bus.findOne({
      nest: true,
      //raw: true,
      where: {id: req.params.id},
      include:[{model: Global_Positions, as: 'current_position', attributes: ['id','latitude', 'longitude'], through: { attributes: []}}]
      });
    return res.status(200).send(bus);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/:id_bus/:id_global_position", async (req, res) => {
  const { id_bus, id_global_position } = req.params;
  try {
    const global_position = await Bus.findOne({
      raw: true,
      nest: true,
      attributes: [],
      where: {id: id_bus},
      include:
      [{
        model: Global_Positions,
        as: 'current_position',
       where: { id:  id_global_position },
        attributes: ['id','latitude','longitude'],
        through: { attributes: []}}]});
      
    return res.status(200).send(global_position);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const bus = await Bus.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(bus);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Bus.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
