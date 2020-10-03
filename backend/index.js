const express = require("express");
require("dotenv").config();

const app = express();
const port = 3001;
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

console.log("Connecting DB to ", MONGODB_URI);

app.get("/", (req, res) => {
  res.send("This is home");
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => console.error("Error connecting to mongo", err));

const index = require("./routes/index");

app.use("/api", index);

app.listen(3001);
