    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  const newArray = arrays.reduce((array , nextarray) => array.concat(nextarray))
  return newArray;
}
//console.log(flatten())
assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);