const express = require("express");
const router = express.Router();
const RealTimeData = require("../models/realTimeData");

router.post("/", async (req, res) => {
  try {
    RealTimeData.create(req.body);
    const realTimeData = await RealTimeData.findOne({
    });
    return res.send(realTimeData);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const realTimeData = await RealTimeData.findAll(
    );
    return res.status(200).send(realTimeData);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const realTimeData = await RealTimeData.findOne({
      where: { id: req.params.id },

    });
    return res.status(200).send(realTimeData);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const realTimeData = await RealTimeData.update(req.body,
      { where: { id: req.params.id } }
    );
    return res.status(200).send(realTimeData);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
  try {
    await RealTimeData.destroy({
      where: { id: req.params.id },
    });
    return res.status(200).send("Deletado com sucesso");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
