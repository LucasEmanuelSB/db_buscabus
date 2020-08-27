const express = require("express");
const router = express.Router();
const Global_Positions = require("../models/global_positions");
const Bus = require("../models/bus");
router.post("/", async (req, res) => {
  try {
    const gps = Global_Positions.create(req.body);
    return res.status(200).send("Criado com sucesso");
  } catch (error) {
    return res.status(500).send("Ocorreu um erro interno");
  }
});

router.get("/", async (req,res) => {
  try {
    const global_positions = await Global_Positions.findAll({
      raw: true,
    });
      return res.status(200).send(global_positions);
  } catch (error) {
      return res.status(500).send("internal server error");
}});

router.get("/:id", async (req, res) => {
  try {
    const global_position = await Global_Positions.findOne({
      raw: true, // ???
      // nest: true,
      where: {id: req.params.id},
      include: [{
        model: Bus,
        as: "bus",
      }]
    });
    return res.status(200).send(global_position);
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Global_Positions.update(req.body,
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
      await Global_Positions.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
