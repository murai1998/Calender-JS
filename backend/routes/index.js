const router = require("express").Router();
const Booking = require("../models/booking");

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});

router.post("/add-event", (req, res) => {
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newBooking = new Booking({
    description,
    date
  });

  newBooking
    .save()
    .then(() => res.json("Event added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
