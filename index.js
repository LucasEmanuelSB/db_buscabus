const express = require("express");
require("./models");

const app = express();

app.disable("x-powered-by");

app.use(express.json());

app.use("/api", require("./routes/index"));

app.listen(80, "0.0.0.0", () => {
  console.log("listening...");
});
