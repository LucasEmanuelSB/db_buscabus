const express = require("express");
const router = express.Router();

const { createUser, findUser, findUsers,updateUser, deleteUser } = require("../controllers/users");

router.post("/", async (req, res) => {
  const { name, surname, email, password, birth_date, genre, job, credits, is_online, device_adress } = req.body;
  let user = null;

  try {
    user = await createUser(name, surname, email, password, birth_date, genre, job, credits, is_online, device_adress);

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id_user", async (req, res) => {
  const { id_user } = req.params;
  let user = null;

  try {
    user = await findUsers(id_user);

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let users = null;
  
    try {
        users = await findUsers();
  
      return res.status(200).send(users);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id_user", async (req, res) => {
    const { id_user } = req.params;
    let user = null;
  
    try {
        user = await updateUser(id_user);
  
      return res.status(200).send(user);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id_user", async (req, res) => {
    const { id_user } = req.params;
    let user = null;
  
    try {
      await deleteUser(id_user);
  
      return res.status(200).send(user);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
