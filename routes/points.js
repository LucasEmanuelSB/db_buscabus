const express = require("express");
const router = express.Router();
const Points = require("../models/points");

router.post("/", async (req, res) => {
  try {
    Points.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const points = await Points.findAll({
      nest: true,
      include: [{all: true}]
    });
      return res.status(200).send(points);
  } catch (error) {
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const point = await Points.findOne({
      where: {id: req.params.id},
      include: [{all: true}]
    });
    return res.status(200).send(point);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const point = await Points.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(point);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Points.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
