const express = require("express");
const router = express.Router();
const Companys = require("../models/Companys");

router.post("/", async (req, res) => {

  const name = req.body.name;
  try {
    const company = await Companys.findOne({where: {name: name}});
    if(company){
      return res.send("name already exists");
    } else {
    Companys.create(req.body);
    return res.status(200).send(req.body);
    }
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const companys = await Companys.findAll({
      nest: true,
      include: [ {all: true, through: {attributes: []} }, ]
    });
      return res.status(200).send(companys);
  } catch (error) {
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const company = await Companys.findOne({
      where: {id: req.params.id},
      include: [ {all: true, through: {attributes: []} }, ]
    });
    return res.status(200).send(company);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const company = await Companys.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(company);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Companys.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
