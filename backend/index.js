import Express from "express";
const app = Express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => console.log("listening port", port));
