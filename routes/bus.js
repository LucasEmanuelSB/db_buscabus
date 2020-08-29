const express = require("express");
const router = express.Router();
const Bus = require("../models/bus");

router.post("/", async (req, res) => {
  try {
    Bus.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (res) => {
  try {
    const buses = await Bus.findAll({
      nest: true,
      include: [{all: true}]
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
      include:[{all: true}]
      });
    return res.status(200).send(bus);
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
