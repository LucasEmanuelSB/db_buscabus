const express = require("express");
const router = express.Router();

const { createFavoriteBus, findFavoriteBus, findFavoritesBus,updateFavoriteBus, deleteFavoriteBus } = require("../controllers/favorites_bus");

router.post("/", async (req, res) => {
  const { id_bus, id_user, description } = req.body;
  let favorite_bus = null;

  try {
    favorite_bus = await createDriverBus(id_bus, id_user, description);

    return res.status(200).send(favorite_bus);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id_favorite_bus", async (req, res) => {
  const { id_favorite_bus } = req.params;
  let favorite_bus = null;

  try {
    favorite_bus = await findFavoriteBus(id_favorite_bus);

    return res.status(200).send(favorite_bus);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let favorites_bus = null;
  
    try {
        favorites_bus = await findFavoriteBus_drivers();
  
      return res.status(200).send(favorites_bus);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id_favorite_bus", async (req, res) => {
    const { id_favorite_bus } = req.params;
    let favorite_bus = null;
  
    try {
        favorite_bus = await updateFavoriteBus(id_favorite_bus);
  
      return res.status(200).send(favorite_bus);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id_favorite_bus", async (req, res) => {
    const { id_favorite_bus } = req.params;
    let favorite_bus = null;
  
    try {
      await deleteFavoriteBus(id_favorite_bus);
  
      return res.status(200).send(favorite_bus);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
