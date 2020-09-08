const express = require("express");

const router = express.Router();

router.use("/adresses", require("./Adresses"));
router.use("/auth", require("./Auth"));
router.use("/buses", require("./Buses"));
router.use("/busDrivers", require("./BusDrivers"));
router.use("/busStops", require("./BusStops"));
router.use("/calendars", require("./Calendars"));
router.use("/companys", require("./Companys"));
router.use("/globalPositions", require("./GlobalPositions"));
router.use("/itinerarys", require("./Itinerarys"));
router.use("/persons", require("./Persons"));
router.use("/points", require("./Points"));
router.use("/routes", require("./Routes"));
router.use("/users", require("./Users"));
router.use("/rateCompanys", require("./UsersCompanys"));
router.use("/rateBusDrivers", require("./UsersBusDrivers"));
router.use("/routesBusStops", require("./RoutesBusStops"));

module.exports = router;
