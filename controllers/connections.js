const Connection = require("../models/connections");

async function createConnection(id_bus, device_adress, time_connection) {

  let connection = null;

  try {
    connection = await Connection.create({
      id_bus, 
      device_adress, 
      time_connection
    });
    return connection;
  } catch (error) {
    throw new Error(error);
  }
}

async function findConnection(id_connection) {
  let connection = null;

  try {
    connection = await Connection.findOne({
      raw: true, // ???
      // nest: true,
      where: id_connection
    });
    return connection;
  } catch (error) {
    throw new Error(error);
  }
}

async function findConnections() {
  let connections = null;

  try {
    connections = await Connection.findAll({
      raw: true,
    });

    return connections;
  } catch (error) {
    throw new Error(error);
  }
}

async function updateConnection(id_connection, obj) {
  let connection = null;

  try {
    connection = await Connection.update(obj, {
      where: id_connection
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteConnection(id_connection){
    try{
        await Connection.destroy({
            where: id_connection
        })
        return true;
    } catch(error){
        console.log(error);
        return false;
    }
}

module.exports = {
  createConnection,
  findConnection,
  findConnections,
  updateConnection,
  deleteConnection
};
