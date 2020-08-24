const express = require("express");
const router = express.Router();

const { createRatingCompany, findRatingCompany, findRatingsCompanys,updateRatingCompany, deleteRatingCompany } = require("../controllers/ratings_companys");

router.post("/", async (req, res) => {
  const { id_company, id_user, rate } = req.body;
  let rating_company = null;

  try {
    rating_company = await createRatingCompany(id_company, id_user, rate);

    return res.status(200).send(rating_company);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id_rating_company", async (req, res) => {
  const { id_rating_company } = req.params;
  let rating_company = null;

  try {
    rating_company = await findRatingsCompanys(id_rating_company);

    return res.status(200).send(rating_company);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let ratings_companys = null;
  
    try {
        ratings_companys = await findRatingsCompanys();
  
      return res.status(200).send(ratings_companys);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id_rating_company", async (req, res) => {
    const { id_rating_company } = req.params;
    let rating_company = null;
  
    try {
        rating_company = await updateRatingCompany(id_rating_company);
  
      return res.status(200).send(rating_company);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id_rating_company", async (req, res) => {
    const { id_rating_company } = req.params;
    let rating_company = null;
  
    try {
      await deleteRatingCompany(id_rating_company);
  
      return res.status(200).send(rating_company);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
