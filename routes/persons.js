const express = require("express");
const router = express.Router();
const Persons = require("../models/persons");
const Bus = require("../models/bus");

router.post("/", async (req, res) => {
  try {
    Persons.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const persons = await Persons.findAll({
      nest: true,
      attributes: ['id','device_adress'],
      include: [{
        model: Bus, as: 'bus', 
      }]
    });
      return res.status(200).send(persons);
  } catch (error) {
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const person = await Persons.findOne({
      where: {id: req.params.id},
      attributes: ['id','device_adress'],
      include: [{
        model: Bus, as: 'bus', 
      }]
    });
    return res.status(200).send(person);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Persons.update(req.body,{ 
      where: {id: req.params.id},
    }
    );
    return res.status(200).send(true);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Persons.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
