const express = require("express");
const router = express.Router();
const Itinerarys = require("../models/itinerarys");
const Bus = require("../models/bus");
const Routes = require("../models/routes");
const Calendars = require("../models/calendars");
const Bus_Stops = require("../models/bus_stops");

router.post("/", async (req, res) => {
  try {
    Itinerarys.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const itinerarys = await Itinerarys.findAll({
      nest: true,
      attributes: ['id'],
      include: [
        {
          model: Bus,
          as: 'bus'
        },
        {
          model: Routes,
          as: 'route'
        },
        {
          model: Calendars,
          as: 'calendar'
        },
        {
          model: Bus_Stops,
          as: 'start_adress'
        },
        {
          model: Bus_Stops,
          as: 'end_adress'
        },
      ]
    });
      return res.status(200).send(itinerarys);
  } catch (error) {
    console.log(error);
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const itinerary = await Itinerarys.findOne({
      nest: true,
      raw: true,
      where: {id: req.params.id},
      attributes: ['id'],
      include: [
        {
          model: Bus,
          as: 'bus'
        },
        {
          model: Routes,
          as: 'route'
        },
        {
          model: Calendars,
          as: 'calendar'
        },
        {
          model: Bus_Stops,
          as: 'start_adress'
        },
        {
          model: Bus_Stops,
          as: 'end_adress'
        },
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
      { where: {id: req.params.id} }
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
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
