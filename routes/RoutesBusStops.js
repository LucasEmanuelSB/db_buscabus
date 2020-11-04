const express = require("express");
const router = express.Router();
const RoutesBusStops = require("../models/routesBusStops");

router.post("/", async (req, res) => {
  try {
    RoutesBusStops.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const routesBusStops = await RoutesBusStops.findAll({
      //raw: true,
    });
    return res.status(200).send(routesBusStops);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/:routeId/:busStopId", async (req, res) => {
  const { routeId, busStopId } = req.params;
  try {
    const routeBusStop = await RoutesBusStops.findOne({
      where: {
        routeId: routeId,
        busStopId: busStopId
      },
    });
    return res.status(200).send(routeBusStop);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:routeId/:busStopId", async (req, res) => {
  const { routeId, busStopId } = req.params;
  try {
    const routeBusStop = await RoutesBusStops.update(req.body,
      {
        where: {
          routeId: routeId,
          busStopId: busStopId
        },
      }
    );
    return res.status(200).send(routeBusStop);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
  try {
    await RoutesBusStops.destroy({
      where: { id: req.params.id },
    });
    return res.status(200).send("Deletado com sucesso");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
