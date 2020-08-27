const express = require("express");
const router = express.Router();
const Itinerarys = require("../models/itinerarys");
const Bus_Stops = require("../models/bus_stops");

router.post("/", async (req, res) => {
  try {
    Itinerarys.create(req.body);
    return res.status(200).send("Criado com sucesso");
  } catch (error) {
    return res.status(500).send("Ocorreu um erro interno");
  }
});

router.get("/", async (req,res) => {
  try {
    const itinerarys = await Itinerarys.findAll({
      nest: true,
      raw: true,
      include: [{model: Bus_Stops}]
    });
      return res.status(200).send(itinerarys);
  } catch (error) {
    console.log(error);
      return res.status(500).send("internal server error");
}});

router.get("/:id", async (req, res) => {
  try {
    const itinerary = await Itinerarys.findOne({
      raw: true, // ???
      // nest: true,
      where: {id: req.params.id}
    });
    return res.status(200).send(itinerary);
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Itinerarys.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(true);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error");
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
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
