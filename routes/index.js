const express = require("express");

const router = express.Router();

router.use("/adresses", require("./adresses"));
router.use("/bus", require("./bus"));
router.use("/bus_drivers", require("./bus_drivers"));
router.use("/bus_global_positions", require("./bus_global_positions"));
router.use("/bus_stops", require("./bus_stops"));
router.use("/companys", require("./companys"));
router.use("/connections", require("./connections"));
router.use("/global_positions", require("./global_positions"));
router.use("/itinerarys", require("./itinerarys"));
router.use("/persons", require("./persons"));
router.use("/routes", require("./routes"));
router.use("/users", require("./users"));

module.exports = router;
