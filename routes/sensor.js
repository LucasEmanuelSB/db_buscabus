const express = require("express");
const router = express.Router();
const Sensor = require("../models/sensor");

router.post("/", async (req, res) => {
  try {
    const sensor = await Sensor.create(req.body);
    return res.status(200).send(sensor);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const sensors = await Sensor.findAll({
      //raw: true,
    });
      return res.status(200).send(sensors);
  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const sensor = await Sensor.findOne({
      where: {id: req.params.id},
    });
    return res.status(200).send(sensor);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const sensor = await Sensor.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(sensor);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Sensor.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
