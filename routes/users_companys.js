const express = require("express");
const router = express.Router();
const Users_Companys = require("../models/users_companys");

router.post("/", async (req, res) => {

    try {
    await Users_Companys.create(req.body);
      return res.status(200).send(req.body);
      
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});


router.get("/", async (req,res) => {
  try {
    const users_companys = await Users_Companys.findAll({
      nest: true,
    });
      return res.status(200).send(users_companys);
  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
}});

router.get("/:id_user/:id_company/", async (req, res) => {

  const { id_user, id_company } = req.params;
  
  try {
    const user_company = await Users_Companys.findOne({
      where: {
        id_user: id_user,
        id_company: id_company
      },
    });
    return res.status(200).send(user_company);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user_company = await Users_Companys.update(req.body,
      { where: {id: req.params.id} }
    );
    return res.status(200).send(user_company);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

});

router.delete("/:id", async (req, res) => {
    try {
      await Users_Companys.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

module.exports = router;
