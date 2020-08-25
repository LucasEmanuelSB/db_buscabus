const express = require("express");
const router = express.Router();

const { createFavoriteBusStop, findFavoriteBusStop, findFavoritesBusStops,updateFavoriteBusStop, deleteFavoriteBusStop } = require("../controllers/favorites_bus_stops");

router.post("/", async (req, res) => {
  const { id_bus_stop, id_user, description } = req.body;
  let favorite_bus_stop = null;

  try {
    favorite_bus_stop = await createFavoriteBusStop(id_bus_stop, id_user, description);

    return res.status(200).send(favorite_bus_stop);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id", async (req, res) => {
  const { id_favorite_bus_stop } = req.params;
  let favorite_bus_stop = null;

  try {
    favorite_bus_stop = await findFavoriteBusStop(id_favorite_bus_stop);

    return res.status(200).send(favorite_bus_stop);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let favorites_bus_stops = null;
  
    try {
        favorites_bus_stops = await findFavoritesBusStops();
  
      return res.status(200).send(favorites_bus_stops);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id", async (req, res) => {
    const { id_favorite_bus_stop } = req.params;
    let favorite_bus_stop = null;
  
    try {
        favorite_bus_stop = await updateFavoriteBusStop(id_favorite_bus_stop);
  
      return res.status(200).send(favorite_bus_stop);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id", async (req, res) => {
    const { id_favorite_bus_stop } = req.params;
    let favorite_bus_stop = null;
  
    try {
      await deleteFavoriteBusStop(id_favorite_bus_stop);
  
      return res.status(200).send(favorite_bus_stop);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
