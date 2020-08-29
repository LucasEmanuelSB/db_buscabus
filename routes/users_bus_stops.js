const express = require("express");
const router = express.Router();
const Users_Bus_Stops = require("../models/users_bus_stops");

router.post("/", async (req, res) => {

    const {id_user, id_bus_stop} = req.body;
    const user_bus_stop = null;

    try {
        user_bus_stop = Users_Bus_Stops.create({
        id_user,
        id_bus_stop
      });
  
      return res.status(200).send(user_bus_stop);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Ocorreu um erro interno");
  }
});

router.get("/", async (req,res) => {
  try {
    const users_bus_stops = await Users_Bus_Stops.findAll({
      raw: true,
    });
      return res.status(200).send(users_bus_stops);
  } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
}});

router.get("/:id", async (req, res) => {
  try {
    const user_bus_stop = await Users_Bus_Stops.findOne({
      raw: true, // ???
      // nest: true,
      where: {id: req.params.id},
    });
    return res.status(200).send(user_bus_stop);
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Users_Bus_Stops.update(req.body,
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
      await Users_Bus_Stops.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
