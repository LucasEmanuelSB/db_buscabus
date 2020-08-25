const express = require("express");
const router = express.Router();
const Favorites_Bus_Stops = require("../models/favorites_bus_stops");

router.post("/", async (req, res) => {
  try {
    Favorites_Bus_Stops.create(req.body);
    return res.status(200).send("Criado com sucesso");
  } catch (error) {
    return res.status(500).send("Ocorreu um erro interno");
  }
});

router.get("/", async (req,res) => {
  try {
    const favorites_bus_stops = await Favorites_Bus_Stops.findAll({
      raw: true,
    });
      return res.status(200).send(favorites_bus_stops);
  } catch (error) {
      return res.status(500).send("internal server error");
}});

router.get("/:id", async (req, res) => {
  try {
    const favorite_bus_stop = await Favorites_Bus_Stops.findOne({
      raw: true, // ???
      // nest: true,
      where: {id: req.params.id}
    });
    return res.status(200).send(favorite_bus_stop);
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Favorites_Bus_Stops.update(req.body,
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
      await Favorites_Bus_Stops.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
