const express = require("express");
const router = express.Router();
const Users_Bus = require("../models/users_bus");

router.post("/", async (req, res) => {

  const {id_user, id_bus} = req.body;

  const user_bus = null;

  try {
    user_bus = Users_Bus.create({
      id_user,
      id_bus
    });

    return res.status(200).send(user_bus);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Ocorreu um erro interno");
  }
});

router.get("/", async (req,res) => {
  try {
    const users_bus = await Users_Bus.findAll({
      raw: true,
    });
      return res.status(200).send(users_bus);
  } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
}});

router.get("/:id", async (req, res) => {
  try {
    const user_bus = await Users_Bus.findOne({
      raw: true, // ???
      // nest: true,
      where: {id: req.params.id},
    });
    return res.status(200).send(user_bus);
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Users_Bus.update(req.body,
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
      await Users_Bus.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
