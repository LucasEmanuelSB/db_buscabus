const express = require("express");
const router = express.Router();

const { createGlobalPosition, findGlobalPosition, findGlobalPositions,updateGlobalPosition, deleteGlobalPosition } = require("../controllers/global_positions");

router.post("/", async (req, res) => {
  const { id_bus, latitude, longitude, time, is_gps } = req.body;
  let global_position = null;

  try {
    global_position = await createGlobalPosition(id_bus, latitude, longitude, time, is_gps);

    return res.status(200).send(global_position);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id", async (req, res) => {
  const { id_global_position } = req.params;
  let global_position = null;

  try {
    global_position = await findGlobalPosition(id_global_position);

    return res.status(200).send(global_position);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let global_positions = null;
  
    try {
        global_positions = await findGlobalPositions();
  
      return res.status(200).send(global_positions);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id", async (req, res) => {
    const { id_global_position } = req.params;
    let global_position = null;
  
    try {
        global_position = await updateGlobalPosition(id_global_position);
  
      return res.status(200).send(global_position);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id", async (req, res) => {
    const { id_global_position } = req.params;
    let global_position = null;
  
    try {
      await deleteGlobalPosition(id_global_position);
  
      return res.status(200).send(global_position);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
