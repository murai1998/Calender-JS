const express = require("express");
require("dotenv").config();

const port = 3001;
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const logger = require("morgan");
console.log("Connecting DB to ", MONGODB_URI);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => console.error("Error connecting to mongo", err));

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3001", "https://clientnetlify.netlify.app"] //Swap this with the client url
  })
);

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "secret",
    cookie: { maxAge: 1000 * 60 * 60 }
  })
);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger("dev"));
const index = require("./routes/index");

app.use("/api", index);
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
