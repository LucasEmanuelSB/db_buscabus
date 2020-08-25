const express = require("express");
const router = express.Router();

const { createConnection, findConnection, findConnections,updateConnection, deleteConnection } = require("../controllers/connections");

router.post("/", async (req, res) => {
  const { id_bus, device_adress, time_connection } = req.body;
  let connection = null;

  try {
    connection = await createConnection(id_bus, device_adress, time_connection);

    return res.status(200).send(connection);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id", async (req, res) => {
  const { id_connection } = req.params;
  let connection = null;

  try {
    connection = await findConnection(id_connection);

    return res.status(200).send(connection);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let connections = null;
  
    try {
        connections = await findConnections();
  
      return res.status(200).send(connections);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id", async (req, res) => {
    const { id_connection } = req.params;
    let connection = null;
  
    try {
        connection = await updateConnection(id_connection);
  
      return res.status(200).send(connection);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id", async (req, res) => {
    const { id_connection } = req.params;
    let connection = null;
  
    try {
      await deleteConnection(id_connection);
  
      return res.status(200).send(connection);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
