const express = require("express");

const router = express.Router();

router.use("/adresses", require("./adresses"));
router.use("/buses", require("./Buses"));
router.use("/busDrivers", require("./BusDrivers"));
router.use("/busStops", require("./BusStops"));
router.use("/calendars", require("./Calendars"));
router.use("/globalPositions", require("./GlobalPositions"));
router.use("/itinerarys", require("./Itinerarys"));
router.use("/points", require("./Points"));
router.use("/routes", require("./Routes"));
router.use("/routesBusStops", require("./RoutesBusStops"));

module.exports = router;
