const express = require("express");
const router = express.Router();
const Adresses = require("../models/Adresses");

router.post("/", async (req, res) => {
  try {
    const adresses = await Adresses.create(req.body);
    return res.status(200).send(adresses);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const adresses = await Adresses.findAll({
      nest: true,
      //raw: true,
    });
      return res.status(200).send(adresses);
  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const adress = await Adresses.findOne({
      where: {id: req.params.id},
    });
    return res.status(200).send(adress);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const adress = await Adresses.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(adress);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Adresses.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
