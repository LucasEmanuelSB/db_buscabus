const express = require("express");
const router = express.Router();
const Global_Positions = require("../models/global_positions");
const Bus = require("../models/bus");

router.post("/", async (req, res) => {
  try {
    Global_Positions.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const global_positions = await Global_Positions.findAll({
    });
      return res.status(200).send(global_positions);
  } catch (error) {
    console.log(error);
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const global_position = await Global_Positions.findOne({
      where: {id: req.params.id},
    });
    return res.status(200).send(global_position);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const gps = await Global_Positions.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(gps);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Global_Positions.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
