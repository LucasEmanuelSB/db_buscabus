const express = require("express");
const router = express.Router();

const { createCompany, findCompany, findCompanys,updateCompany, deleteCompany } = require("../controllers/companys");

router.post("/", async (req, res) => {
  const { name, average_rate } = req.body;
  let company = null;

  try {
    company = await createCompany(name, average_rate);

    return res.status(200).send(company);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id", async (req, res) => {
  const { id_company } = req.params;
  let company = null;

  try {
    company = await findCompany(id_company);

    return res.status(200).send(company);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let companys = null;
  
    try {
        companys = await findCompanys();
  
      return res.status(200).send(companys);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id", async (req, res) => {
    const { id_company } = req.params;
    let company = null;
  
    try {
        company = await updateCompany(id_company);
  
      return res.status(200).send(company);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id", async (req, res) => {
    const { id_company } = req.params;
    let company = null;
  
    try {
      await deleteCompany(id_company);
  
      return res.status(200).send(company);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
