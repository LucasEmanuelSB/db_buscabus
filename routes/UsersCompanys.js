const express = require("express");
const router = express.Router();
const UsersCompanys = require("../models/UsersCompanys");

router.post("/", async (req, res) => {

    try {
    await UsersCompanys.create(req.body);
      return res.status(200).send(req.body);
      
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});


router.get("/", async (req,res) => {
  try {
    const usersCompanys = await UsersCompanys.findAll({
      nest: true,
    });
      return res.status(200).send(usersCompanys);
  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
}});

router.get("/:userId/:companyId/", async (req, res) => {

  const { userId, companyId } = req.params;
  
  try {
    const userCompany = await UsersCompanys.findOne({
      where: {
        userId: userId,
        companyId: companyId
      },
    });
    return res.status(200).send(userCompany);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const userCompany = await UsersCompanys.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(userCompany);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await UsersCompanys.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
