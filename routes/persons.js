const express = require("express");
const router = express.Router();

const { createPerson, findPerson, findPersons,updatePerson, deletePerson } = require("../controllers/persons");

router.post("/", async (req, res) => {
  const { device_adress } = req.body;
  let person = null;

  try {
    person = await createPerson(device_adress);

    return res.status(200).send(person);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id_person", async (req, res) => {
  const { id_person } = req.params;
  let person = null;

  try {
    person = await findPersons(id_person);

    return res.status(200).send(person);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let persons = null;
  
    try {
        persons = await findPersons();
  
      return res.status(200).send(persons);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id_person", async (req, res) => {
    const { id_person } = req.params;
    let person = null;
  
    try {
        person = await updatePerson(id_person);
  
      return res.status(200).send(person);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id_person", async (req, res) => {
    const { id_person } = req.params;
    let person = null;
  
    try {
      await deletePerson(id_person);
  
      return res.status(200).send(person);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
