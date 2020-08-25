const express = require("express");
const router = express.Router();

const { createRatingBusDriver, findRatingBusDriver, findRatingsBusDrivers,updateRatingBusDriver, deleteRatingBusDriver } = require("../controllers/ratings_bus_drivers");

router.post("/", async (req, res) => {
  const { id_bus_driver, id_user, rate } = req.body;
  let rating_bus_driver = null;

  try {
    rating_bus_driver = await createRatingBusDriver(id_bus_driver, id_user, rate);

    return res.status(200).send(rating_bus_driver);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id", async (req, res) => {
  const { id_rating_bus_driver } = req.params;
  let rating_bus_driver = null;

  try {
    rating_bus_driver = await findRatingsBusDrivers(id_rating_bus_driver);

    return res.status(200).send(rating_bus_driver);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let ratings_bus_drivers = null;
  
    try {
        ratings_bus_drivers = await findRatingsBusDrivers();
  
      return res.status(200).send(ratings_bus_drivers);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id", async (req, res) => {
    const { id_rating_bus_driver } = req.params;
    let rating_bus_driver = null;
  
    try {
        rating_bus_driver = await updateRatingBusDriver(id_rating_bus_driver);
  
      return res.status(200).send(rating_bus_driver);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id", async (req, res) => {
    const { id_rating_bus_driver } = req.params;
    let rating_bus_driver = null;
  
    try {
      await deleteRatingBusDriver(id_rating_bus_driver);
  
      return res.status(200).send(rating_bus_driver);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
