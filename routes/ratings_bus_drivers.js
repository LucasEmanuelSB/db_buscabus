const express = require("express");
const router = express.Router();
const Ratings_Bus_Drivers = require("../models/ratings_bus_drivers");

router.post("/", async (req, res) => {
  try {
    Ratings_Bus_Drivers.create(req.body);
    return res.status(200).send("Criado com sucesso");
  } catch (error) {
    return res.status(500).send("Ocorreu um erro interno");
  }
});

router.get("/", async (req,res) => {
  try {
    const ratings_bus_drivers = await Ratings_Bus_Drivers.findAll({
      raw: true,
    });
      return res.status(200).send(ratings_bus_drivers);
  } catch (error) {
      return res.status(500).send("internal server error");
}});

router.get("/:id", async (req, res) => {
  try {
    const rating_bus_driver = await Ratings_Bus_Drivers.findOne({
      raw: true, // ???
      // nest: true,
      where: {id: req.params.id}
    });
    return res.status(200).send(rating_bus_driver);
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Ratings_Bus_Drivers.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(true);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error");
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Ratings_Bus_Drivers.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
