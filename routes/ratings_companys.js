const express = require("express");
const router = express.Router();
const Rating_Companys = require("../models/ratings_companys");

router.post("/", async (req, res) => {
  try {
    Rating_Companys.create(req.body);
    return res.status(200).send("Criado com sucesso");
  } catch (error) {
    return res.status(500).send("Ocorreu um erro interno");
  }
});

router.get("/", async (req,res) => {
  try {
    const ratings_companys = await Rating_Companys.findAll({
      raw: true,
    });
      return res.status(200).send(ratings_companys);
  } catch (error) {
      return res.status(500).send("internal server error");
}});

router.get("/:id", async (req, res) => {
  try {
    const rating_company = await Rating_Companys.findOne({
      raw: true, // ???
      // nest: true,
      where: {id: req.params.id}
    });
    return res.status(200).send(rating_company);
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Rating_Companys.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(true);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error");
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Rating_Companys.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
