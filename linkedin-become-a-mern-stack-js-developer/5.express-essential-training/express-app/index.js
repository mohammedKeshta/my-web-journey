import path from "path";
import express, { json } from "express";
import data from "./data/db";

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // get data first
  res.json(data);
});

app.get("/item/:id", (req, res) => {
  if (req.params && req.params.id) {
    let id = parseInt(req.params.id);
    let item = (data || []).filter(item => item.id === id);
    res.send(item);
  }
});

app.post("/newItem", (req, res) => {
  res.send(`<h1>A POST request with / route on port ${PORT}</h1>`);
});

app.put("/item", (req, res) => {
  res.send(`<h1>A PUT request with / route on port ${PORT}</h1>`);
});

app.delete("/item", (req, res) => {
  res.send(`<h1>A DELETE request with / route on port ${PORT}</h1>`);
});

app.listen(PORT, () => {
  console.log(`your server is running on port ${PORT}`);
});
