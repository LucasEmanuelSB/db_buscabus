const express = require("express");
const router = express.Router();
const Companys = require("../models/companys");

router.post("/", async (req, res) => {
  try {
    Companys.create(req.body);
    return res.status(200).send(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const companys = await Companys.findAll({
      raw: true,
    });
      return res.status(200).send(companys);
  } catch (error) {
      return res.status(500).send(error);
}});

router.get("/:id", async (req, res) => {
  try {
    const company = await Companys.findOne({
      where: {id: req.params.id}
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
