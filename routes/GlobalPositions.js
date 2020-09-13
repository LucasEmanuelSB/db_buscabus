const express = require("express");
const { create } = require("../models/GlobalPositions");
const router = express.Router();
const GlobalPositions = require("../models/GlobalPositions");

router.post("/", async (req, res) => {
  try {
    GlobalPositions.create(req.body);
    const globalPosition = await GlobalPositions.findOne({
      where: {latitude: req.body.latitude, longitude: req.body.longitude}
    });
    return res.send(globalPosition);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const globalPositions = await GlobalPositions.findAll(
    );
    return res.status(200).send(globalPositions);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/:busId", async (req, res) => {
  try {
    const globalPostion = await GlobalPositions.findOne({
      where: { busId: req.params.busId },

    });
    return res.status(200).send(globalPostion);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:busId", async (req, res) => {
  try {
    const gps = await GlobalPositions.update(req.body,
      { where: { busId: req.params.busId } }
    );
    return res.status(200).send(gps);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:busId", async (req, res) => {
  try {
    await GlobalPositions.destroy({
      where: { busId: req.params.busId },
    });
    return res.status(200).send("Deletado com sucesso");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
