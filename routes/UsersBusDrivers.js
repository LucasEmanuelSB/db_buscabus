const express = require("express");
const UsersBusDrivers = require("../models/UsersBusDrivers");
const router = express.Router();

router.post("/", async (req, res) => {
  
  try {
    await UsersBusDrivers.create(req.body);
      return res.status(200).send(req.body);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/", async (req,res) => {
  try {
    const usersBusDrivers = await UsersBusDrivers.findAll({});
      return res.status(200).send(usersBusDrivers);
  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
}});

router.get("/:userId/:busDriverId", async (req, res) => {
  try {
    const userBusDriver = await UsersBusDrivers.findOne({
      where: {userId: req.params.userId, busDriverId: req.params.busDriverId},
    });
    return res.status(200).send(userBusDriver);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user_busDriver = await UsersBusDrivers.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(user_busDriver);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await UsersBusDrivers.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
