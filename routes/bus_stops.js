const express = require("express");
const router = express.Router();

const { createBusStop, findBusStop, findBusStops,updateBusStop, deleteBusStop } = require("../controllers/bus_stops");

router.post("/", async (req, res) => {
  const { is_terminal, latitude, longitude, id_adress } = req.body;
  let bus_stop = null;

  try {
    bus_stop = await createBusStop(is_terminal, latitude, longitude, id_adress);

    return res.status(200).send(bus_stop);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id", async (req, res) => {
  const { id_bus_stop } = req.params;
  let bus_stop = null;

  try {
    bus_stop = await findBusStop(id_bus_stop);

    return res.status(200).send(bus_stop);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let bus_stops = null;
  
    try {
        bus_stops = await findBusStops();
  
      return res.status(200).send(bus_stops);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id", async (req, res) => {
    const { id_bus_stop } = req.params;
    let bus_stop = null;
  
    try {
        bus_stop = await updateBusStop(id_bus_stop);
  
      return res.status(200).send(bus_stop);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id", async (req, res) => {
    const { id_bus_stop } = req.params;
    let bus_stop = null;
  
    try {
      await deleteBusStop(id_bus_stop);
  
      return res.status(200).send(bus_stop);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
