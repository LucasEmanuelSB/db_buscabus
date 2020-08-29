const express = require("express");
const router = express.Router();
const Calendars = require("../models/calendars");

router.post("/", async (req, res) => {
  try {
    const calendars = await Calendars.create(req.body);
    return res.status(200).send(calendars);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const calendars = await Calendars.findAll({
      raw: true,
    });
      return res.status(200).send(calendars);
  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const calendar = await Calendars.findOne({
      where: {id: req.params.id},
    });
    return res.status(200).send(calendar);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const calendar = await Calendars.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(calendar);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Calendars.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
