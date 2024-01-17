const wordSearch = (letters, word) => {
  let newArr = [];
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      console.log(`Found word horizontally! Word is: ${word}`);
      return true;
    }
  }

  for (let row = 0; row < letters.length; row++) { //loop through rows
    for (let column = 0; column < letters[row].length; column++) { //loop through columns
      if (newArr[column] === undefined) {
        newArr[column] = []; // if no value, skip
      }
      newArr[column][row] = letters[row][column]; // for position of value(index) in column & row, swap to row & column
    }
  }
  //return newArr;
  const verticalJoin = newArr.map(ls => ls.join(''));
  for (l of verticalJoin) {
    if (l.includes(word)) {
      console.log(`Found word vertically! Word is: ${word}`);
      return true;
    }
  }

  return false;

};

module.exports = wordSearch;