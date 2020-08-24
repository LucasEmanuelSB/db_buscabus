const express = require("express");
const router = express.Router();

const { createItinerary, findItinerary, findItinerarys,updateItinerary, deleteItinerary } = require("../controllers/itinerarys");

router.post("/", async (req, res) => {
  const { id_bus, id_route, date, time, id_start_adress, id_end_adress } = req.body;
  let itinerary = null;

  try {
    itinerary = await createItinerary(id_bus, id_route, date, time, id_start_adress, id_end_adress);

    return res.status(200).send(itinerary);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/:id_itinerary", async (req, res) => {
  const { id_itinerary } = req.params;
  let itinerary = null;

  try {
    itinerary = await findItinerarys(id_itinerary);

    return res.status(200).send(itinerary);
  } catch (error) {
    return res.status(500).send("internal server error");
  }
});

router.get("/", async (req,res) => {
    const { country, uf, city, neighborhood, street, cep } = req.body;
    let itinerarys = null;
  
    try {
        itinerarys = await findItinerarys();
  
      return res.status(200).send(itinerarys);
    } catch (error) {
      return res.status(500).send("internal server error");
}});

router.put("/:id_itinerary", async (req, res) => {
    const { id_itinerary } = req.params;
    let itinerary = null;
  
    try {
        itinerary = await updateItinerary(id_itinerary);
  
      return res.status(200).send(itinerary);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

router.delete("/:id_itinerary", async (req, res) => {
    const { id_itinerary } = req.params;
    let itinerary = null;
  
    try {
      await deleteItinerary(id_itinerary);
  
      return res.status(200).send(itinerary);
    } catch (error) {
      return res.status(500).send("internal server error");
    }
});

module.exports = router;
