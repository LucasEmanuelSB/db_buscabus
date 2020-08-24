const express = require("express");
const router = express.Router();

const { createBus, findBus, findBuses,updateBus, deleteBus } = require("../controllers/bus");

router.post("/", async (req, res) => {
  const { line,is_available } = req.body;
  let bus = null;

  try {
    bus = await createBus(line,is_available);

    return res.status(200).send(bus);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id_bus", async (req, res) => {
  const { id_bus } = req.params;
  let bus = null;

  try {
    bus = await findBus(id_bus);

    return res.status(200).send(bus);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let buses = null;
  
    try {
      buses = await findBuses();
  
      return res.status(200).send(bus);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id_bus", async (req, res) => {
    const { id_bus } = req.params;
    let bus = null;
  
    try {
      bus = await updateBus(id_bus);
  
      return res.status(200).send(bus);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id_bus", async (req, res) => {
    const { id_bus } = req.params;
    let bus = null;
  
    try {
      await deleteBus(id_bus);
  
      return res.status(200).send(bus);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
