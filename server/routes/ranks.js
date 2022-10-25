const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./TestData.json", "utf8"));
  res.json(data.scoresList);
});

router.post("/", (req, res) => {
  // Grab the data sent by client
  const { newScore } = req.body;
  // Add rank to ranks list
  const { scoresList } = JSON.parse(fs.readFileSync("./TestData.json", "utf8"));
  //Use below Line if we want to manipulate data on the main JSON file
  // scoresList.push(newScore);
  // fs.writeFileSync("./TestData.json", JSON.stringify(rank), "utf8");

  //sort scores for search results
  const sortedScores = scoresList.sort((a, b) => a - b);
  //Get number of scores < newScore
  const belowScores = sortedScores.findIndex(
    (rank) => rank === parseInt(newScore)
  );

  //Get Student Rank %
  let studentRank = (belowScores / scoresList.length) * 100;
  // Round to the nearest hundred
  studentRank = Math.round((studentRank * 100) / 100);

  //get the count of each score
  const count = {};
  for (const element of sortedScores) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }

  //head count for each score
  const eachScoreCount = Object.values(count);

  // Return new list
  res.json({
    rank: newScore,
    sortedScores,
    studentRank,
    count,
    eachScoreCount,
  });
});

module.exports = router;
