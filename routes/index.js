const express = require("express");

const router = express.Router();

router.use("/adresses", require("./adresses"));
router.use("/buses", require("./buses"));
router.use("/busDrivers", require("./busDrivers"));
router.use("/busStops", require("./busStops"));
router.use("/calendars", require("./calendars"));
router.use("/globalPositions", require("./globalPositions"));
router.use("/itinerarys", require("./itinerarys"));
router.use("/routes", require("./routes"));
router.use("/routesBusStops", require("./routesBusStops"));

module.exports = router;
