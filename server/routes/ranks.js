const { Console } = require("console");
const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./TestData.json", "utf8"));
  res.json(data.scoresList);
});

router.post("/", (req, res) => {
  // Grab the data sent by client
  const newScore = req.body.score;
  // Add rank to ranks list
  const rank = JSON.parse(fs.readFileSync("./TestData.json", "utf8"));
  rank.scoresList.push(newScore);
  fs.writeFileSync("./TestData.json", JSON.stringify(rank), "utf8");
  // // Return new list
  res.json(rank.scoresList);
});

module.exports = router;
