const express = require("express");

const app = express();
const port = 3001;
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
console.log("Connecting DB to ", MONGODB_URI);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    let data1 = await List.insertMany(list);
    console.log(data1);
  })
  .catch(err => console.error("Error connecting to mongo", err));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => console.log("listening port", port));
