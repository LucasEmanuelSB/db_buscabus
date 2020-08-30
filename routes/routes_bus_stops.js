const express = require("express");
const router = express.Router();
const Routes_Bus_Stops = require("../models/routes_bus_stops");

router.post("/", async (req, res) => {
  try {
    const routes_bus_stops = await Routes_Bus_Stops.create(req.body);
    return res.status(200).send(routes_bus_stops);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const routes_bus_stops = await Routes_Bus_Stops.findAll({
      raw: true,
    });
      return res.status(200).send(routes_bus_stops);
  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
}});

router.get("/:id_route/:id_bus_stop", async (req, res) => {
    const { id_route, id_bus_stop } = req.params;
  try {
    const route_bus_stop = await Routes_Bus_Stops.findOne({
      where: {
          id_route: id_route,
          id_bus_stop: id_bus_stop
    },
    });
    return res.status(200).send(route_bus_stop);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const route_bus_stop = await Routes_Bus_Stops.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(route_bus_stop);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Routes_Bus_Stops.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
