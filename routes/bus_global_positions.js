const express = require("express");
const router = express.Router();
const Bus_Global_Positions = require("../models/bus_global_positions");

router.post("/", async (req, res) => {
  try {
    Bus_Global_Positions.create(req.body);
    return res.status(200).send("Criado com sucesso");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Ocorreu um erro interno");
  }
});

router.get("/", async (req,res) => {
  try {
    const bus_global_positions = await Bus_Global_Positions.findAll({
      raw: true,
    });
      return res.status(200).send(bus_global_positions);
  } catch (error) {
      return res.status(500).send("internal server error");
}});

router.get("/:id", async (req, res) => {
  try {
    const bus_global_position = await Bus_Global_Positions.findOne({
      nest: true,
      where: {id: req.params.id},
    });
    return res.status(200).send(bus_global_position);
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
});

/* router.put("/:id", async (req, res) => {
  try {
    await Bus_Global_Positions.update(req.body,
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
      await Bus_Global_Positions.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
