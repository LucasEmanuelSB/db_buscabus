const express = require("express");
const router = express.Router();
const BusGlobalPositions = require("../models/BusGlobalPositions");

router.post("/", async (req, res) => {
  try {
    BusGlobalPositions.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const busGlobalPositions = await BusGlobalPositions.findAll({
      //raw: true,
    });
      return res.status(200).send(busGlobalPositions);
  } catch (error) {
      return res.status(500).send(error);
}});

router.get("/:busId/:globalPositionId", async (req, res) => {
  try {
    const busGlobalPosition = await BusGlobalPositions.findOne({
      nest: true,
      where: {busId: req.params.busId, globalPositionId: req.params.globalPositionId},
    });
    return res.status(200).send(busGlobalPosition);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

/* router.put("/:id", async (req, res) => {
  try {
    await BusGlobalPositions.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(true);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error");
  }

}); */

router.delete("/:id", async (req, res) => {
    try {
      await BusGlobalPositions.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send(error);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
