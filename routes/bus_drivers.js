const express = require("express");
const router = express.Router();

const { createBusDriver, findBusDriver, findBusDrivers,updateBusDriver, deleteBusDriver } = require("../controllers/bus_drivers");

router.post("/", async (req, res) => {
  const { id_bus, average_rate } = req.body;
  let bus_driver = null;

  try {
    bus_driver = await createDriverBus(id_bus, average_rate);

    return res.status(200).send(bus_driver);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id_bus_driver", async (req, res) => {
  const { id_bus_driver } = req.params;
  let bus_driver = null;

  try {
    bus_driver = await findBusDriver(id_bus_driver);

    return res.status(200).send(bus_driver);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let bus_drivers = null;
  
    try {
      bus_drivers = await findBusDriver_drivers();
  
      return res.status(200).send(bus_drivers);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id_bus_driver", async (req, res) => {
    const { id_bus_driver } = req.params;
    let bus_driver = null;
  
    try {
        bus_driver = await updateBusDriver(id_bus_driver);
  
      return res.status(200).send(bus_driver);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id_bus_driver", async (req, res) => {
    const { id_bus_driver } = req.params;
    let bus_driver = null;
  
    try {
      await deleteBusDriver(id_bus_driver);
  
      return res.status(200).send(bus_driver);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
