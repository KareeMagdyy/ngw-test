const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./TestData.json", "utf8"));
  const randomResults = getRandomItems(data.wordList, 10);
  res.json(randomResults);
});

const getRandomItemFromArray = (arr) => {
  //Get random element from array
  return arr[Math.floor(Math.random() * arr.length)];
};

//Select Random items
const getRandomItems = (array, itemsCount) => {
  // This array will be used for selected items
  const selectedItems = [];

  //get unique values from "pos" key
  const pos = [...new Set(array.map((item) => item.pos))];

  //Subtract the count of found pos from the item count
  itemsCount -= pos.length;

  if (itemsCount < 0) {
    //Error Handling
    throw "The count of items cannot be less than the amount of pos!";
  }

  //Iterate through every found "pos" value
  for (i = 0; i < pos.length; i++) {
    //get all objects for the current "pos" value
    const posObjects = array.filter((item) => item.pos === pos[i]);

    //If there are no objects for the current "pos" value
    if (posObjects.length === 0) {
      //Error Handling
      throw 'Object not found for this "pos"';
    }

    //Get random object from the each pos once
    selectedItems.push(getRandomItemFromArray(posObjects));
  }

  for (i = 0; i < itemsCount; i++) {
    // Add a random object from the array to the result array.
    let newItem = array[Math.floor(Math.random() * array.length)];

    //Making sure no duplicates
    if (!selectedItems.includes(newItem)) {
      //If not duplicate push to the selected array
      selectedItems.push(newItem);
    } else {
      //If there is a duplicate iteration  + 1
      itemsCount++;
    }
  }
  return selectedItems;
};

module.exports = router;
