// Your code here!

const colorCombinator = require('./color-combinator.js');

const colorDeconstructor = require('./color-deconstructor.js');

const colorOne = getInput(0);

const colorTwo = getInput(1);



if (colorOne === undefined) {
  console.log("Enter a color or get smacked.");
} else if (colorTwo === undefined) {
  console.log(colorDeconstructor(colorOne));
} else {
  console.log(colorCombinator(colorOne, colorTwo));
}

// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
