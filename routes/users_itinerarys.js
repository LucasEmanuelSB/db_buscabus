const express = require("express");
const router = express.Router();
const Users_Itinerarys = require("../models/users_itinerarys");

router.post("/", async (req, res) => {

    const {id_user, id_itinerary} = req.body;
    const user_itinerary = null;

    try {
        user_itinerary = Users_Itinerarys.create({
        id_user,
        id_itinerary
      });
  
      return res.status(200).send(user_itinerary);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Ocorreu um erro interno");
  }
});

router.get("/", async (req,res) => {
  try {
    const users_itinerarys = await Users_Itinerarys.findAll({
      raw: true,
    });
      return res.status(200).send(users_itinerarys);
  } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
}});

router.get("/:id", async (req, res) => {
  try {
    const user_itinerary = await Users_Itinerarys.findOne({
      raw: true, // ???
      // nest: true,
      where: {id: req.params.id},
    });
    return res.status(200).send(user_itinerary);
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Users_Itinerarys.update(req.body,
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
      await Users_Itinerarys.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
