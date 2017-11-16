/*
Problem:
  

Examples:
var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

Data/Alg:
  Will build new matrix one element at a time by iterating over the original in a double loop
  like:

  for (matrix rows)
    for (matrix cols)
      newMatrix[col][row] = oldMatrix[row][col]
    }
  }
  and return the newMatrix

*/

function transpose(matrix) {
  var numRows = matrix.length;
  var numCols = matrix[0].length;
  var newMatrix = [];
  //check input?
 
  for (row = 0; row < numRows; row += 1) {
    for (col = 0; col < numCols; col += 1) {
      if (col >= newMatrix.length) newMatrix.push([]);
      newMatrix[col][row] = matrix[row][col];
    }
  }

  return newMatrix;
}

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]