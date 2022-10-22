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
  return shuffle(selectedItems);
};

const getRandomItemFromArray = (arr) => {
  //Get random element from array
  return arr[Math.floor(Math.random() * arr.length)];
};

/*Shuffle Algorithm to prevent any known Patterns
  for the answer as the algorithm above will always 
  return fixed pos for the first 4 items which are
  ("adverb","verb","noun","adjective")
*/

//Borrowed this shuffle algorithm from Stackoverflow
//Algorithm Link: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976

const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

module.exports = getRandomItems;
