const express = require("express");
const router = express.Router();
const fs = require("fs");
const getRandomItems = require("../utils/helperFunctions");

router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./TestData.json", "utf8"));
  const randomResults = getRandomItems(data.wordList, 10);
  res.json(randomResults);
});

module.exports = router;
