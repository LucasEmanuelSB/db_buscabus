const express = require("express");
const router = express.Router();

const { createRoute, findRoute, findRoutes,updateRoute, deleteRoute } = require("../controllers/routes");

router.post("/", async (req, res) => {
  const { points } = req.body;
  let route = null;

  try {
    route = await createRoute(points);

    return res.status(200).send(route);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id_route", async (req, res) => {
  const { id_route } = req.params;
  let route = null;

  try {
    route = await findRoutes(id_route);

    return res.status(200).send(route);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let routes = null;
  
    try {
        routes = await findRoutes();
  
      return res.status(200).send(routes);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id_route", async (req, res) => {
    const { id_route } = req.params;
    let route = null;
  
    try {
        route = await updateRoute(id_route);
  
      return res.status(200).send(route);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id_route", async (req, res) => {
    const { id_route } = req.params;
    let route = null;
  
    try {
      await deleteRoute(id_route);
  
      return res.status(200).send(route);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
