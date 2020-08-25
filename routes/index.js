const express = require("express");

const router = express.Router();

router.use("/adresses", require("./adresses"));
router.use("/bus", require("./bus"));
router.use("/bus_drivers", require("./bus_drivers"));
router.use("/bus_stops", require("./bus_stops"));
router.use("/companys", require("./companys"));
router.use("/connections", require("./connections"));
router.use("/favorites_bus", require("./favorites_bus"));
router.use("/favorites_bus_stops", require("./favorites_bus_stops"));
router.use("/favorites_itinerarys", require("./favorites_itinerarys"));
router.use("/global_positions", require("./global_positions"));
router.use("/itinerarys", require("./itinerarys"));
router.use("/persons", require("./persons"));
router.use("/ratings_bus_drivers", require("./ratings_bus_drivers"));
router.use("/ratings_companys", require("./ratings_companys"));
router.use("/routes", require("./routes"));
router.use("/routes_bus_stops", require("./routes_bus_stops"));
router.use("/users", require("./users"));

module.exports = router;
