const express = require("express");
const router = express.Router();
const Bus = require("../models/bus");
const Global_Positions = require("../models/global_positions");

router.post("/", async (req, res) => {
  try {
    Bus.create(req.body);
    return res.status(200).send("Criado com sucesso");
  } catch (error) {
    return res.status(500).send("Ocorreu um erro interno");
  }
});

router.get("/", async (req,res) => {
  try {
    const buses = await Bus.findAll({
      raw: true,
    });
      return res.status(200).send(buses);
  } catch (error) {
      return res.status(500).send("internal server error");
}});

router.get("/:id", async (req, res) => {
  try {
    const bus = await Bus.findOne({
      raw: true, // ???
      // nest: true,
      where: {id: req.params.id},
      include: [
      {
        model: Global_Positions,
        as: "global positions"
      },
      ],
    });
    return res.status(200).send(bus);
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Bus.update(req.body,
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
      await Bus.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
