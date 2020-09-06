const express = require("express");
const router = express.Router();
const Bus_Global_Positions = require("../models/bus_global_positions");

router.post("/", async (req, res) => {
  try {
    Bus_Global_Positions.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const bus_global_positions = await Bus_Global_Positions.findAll({
      //raw: true,
    });
      return res.status(200).send(bus_global_positions);
  } catch (error) {
      return res.status(500).send(error);
}});

router.get("/:id_bus/:id_global_position", async (req, res) => {
  try {
    const bus_global_position = await Bus_Global_Positions.findOne({
      nest: true,
      where: {id_bus: req.params.id_bus, id_global_position: req.params.id_global_position},
    });
    return res.status(200).send(bus_global_position);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
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
      return res.status(200).send(error);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
