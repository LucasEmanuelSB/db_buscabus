const express = require("express");
const router = express.Router();

const { createRouteBusStop, findRouteBusStop, findRoutesBusStops,updateRouteBusStop, deleteRouteBusStop } = require("../controllers/routes_bus_stops");

router.post("/", async (req, res) => {
  const { id_route, id_bus_stop } = req.body;
  let route_bus_stop = null;

  try {
    route_bus_stop = await createRouteBusStop(id_route, id_bus_stop);

    return res.status(200).send(route);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id_route_bus_stop", async (req, res) => {
  const { id_route_bus_stop } = req.params;
  let route_bus_stop = null;

  try {
    route_bus_stop = await findRouteBusStop(id_route_bus_stop);

    return res.status(200).send(route_bus_stop);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let routes_bus_stops = null;
  
    try {
        routes_bus_stops = await findRoutesBusStops();
  
      return res.status(200).send(routes_bus_stops);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id_route_bus_stop", async (req, res) => {
    const { id_route_bus_stop } = req.params;
    let route_bus_stop = null;
  
    try {
        route_bus_stop = await updateRouteBusStop(id_route_bus_stop);
  
      return res.status(200).send(route_bus_stop);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id_route_bus_stop", async (req, res) => {
    const { id_route_bus_stop } = req.params;
    let route_bus_stop = null;
  
    try {
      await deleteRouteBusStop(id_route_bus_stop);
  
      return res.status(200).send(route_bus_stop);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
