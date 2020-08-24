const express = require("express");
const router = express.Router();

const { createAdress, findAdress, findAdresses,updateAdress, deleteAdress } = require("../controllers/adresses");

router.post("/", async (req, res) => {
  const { country, uf, city, neighborhood, street, cep } = req.body;
  let adress = null;

  try {
    adress = await createAdress(country, uf, city, neighborhood, street, cep);

    return res.status(200).send(adress);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id_adress", async (req, res) => {
  const { id_adress } = req.params;
  let adress = null;

  try {
    adress = await findAdress(id_adress);

    return res.status(200).send(adress);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let adresses = null;
  
    try {
      adresses = await findAdresses();
  
      return res.status(200).send(adresses);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id_adress", async (req, res) => {
    const { id_adress } = req.params;
    let adress = null;
  
    try {
      adress = await updateAdress(id_adress);
  
      return res.status(200).send(adress);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id_adress", async (req, res) => {
    const { id_adress } = req.params;
    let adress = null;
  
    try {
      await deleteAdress(id_adress);
  
      return res.status(200).send(adress);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
