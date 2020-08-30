const express = require("express");
const router = express.Router();
const Routes = require("../models/routes");

router.post("/", async (req, res) => {
  try {
    Routes.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const routes = await Routes.findAll({
      nest: true,
      include: [{all: true}]
    });
      return res.status(200).send(routes);
  } catch (error) {
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const route = await Routes.findOne({
      where: {id: req.params.id},
      include: [{all: true}]
    });
    return res.status(200).send(route);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const route = await Routes.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(route);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Routes.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
