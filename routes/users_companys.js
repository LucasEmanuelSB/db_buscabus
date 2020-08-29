const express = require("express");
const router = express.Router();
const Users_Companys = require("../models/users_companys");

router.post("/", async (req, res) => {

    const {id_user, id_company} = req.body;
    const user_company = null;

    try {
        user_company = Users_Companys.create({
        id_user,
        id_company
      });
  
      return res.status(200).send(user_company);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Ocorreu um erro interno");
  }
});


router.get("/", async (req,res) => {
  try {
    const users_companys = await Users_Companys.findAll({
      raw: true,
    });
      return res.status(200).send(users_companys);
  } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
}});

router.get("/:id", async (req, res) => {
  try {
    const user_company = await Users_Companys.findOne({
      raw: true, // ???
      // nest: true,
      where: {id: req.params.id},
    });
    return res.status(200).send(user_company);
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Users_Companys.update(req.body,
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
      await Users_Companys.destroy({
        where: {id: req.params.id},
      }); 
      return res.status(200).send("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
