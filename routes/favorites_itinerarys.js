const express = require("express");
const router = express.Router();

const { createFavoriteItinerary, findFavoriteItinerary, findFavoritesItinerarys,updateFavoriteItinerary, deleteFavoriteItinerary } = require("../controllers/favorites_itinerarys");

router.post("/", async (req, res) => {
  const { id_user, id_itinerary, description } = req.body;
  let favorite_itinerary = null;

  try {
    favorite_itinerary = await createFavoriteItinerary(id_user, id_itinerary, description);

    return res.status(200).send(favorite_itinerary);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id", async (req, res) => {
  const { id_favorite_itinerary } = req.params;
  let favorite_itinerary = null;

  try {
    favorite_itinerary = await findFavoriteItinerary(id_favorite_itinerary);

    return res.status(200).send(favorite_itinerary);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let favorites_itinerarys = null;
  
    try {
        favorites_itinerarys = await findFavoritesItinerarys();
  
      return res.status(200).send(favorites_itinerarys);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id", async (req, res) => {
    const { id_favorite_itinerary } = req.params;
    let favorite_itinerary = null;
  
    try {
        favorite_itinerary = await updateFavoriteItinerary(id_favorite_itinerary);
  
      return res.status(200).send(favorite_itinerary);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id", async (req, res) => {
    const { id_favorite_itinerary } = req.params;
    let favorite_itinerary = null;
  
    try {
      await deleteFavoriteItinerary(id_favorite_itinerary);
  
      return res.status(200).send(favorite_itinerary);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
