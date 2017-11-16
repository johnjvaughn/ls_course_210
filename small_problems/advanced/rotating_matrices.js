function rotate90(matrix) {
  var newMatrix = [];
  var numRows = matrix.length;
  var numCols = matrix[0].length;

  for (row = 0; row < numRows; row += 1) {
    for (col = 0; col < numCols; col += 1) {
      if (newMatrix.length <= col) newMatrix.push([]);
      newMatrix[col][numRows - row - 1] = matrix[row][col];
    }
  }

  return newMatrix;
}


var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

assertEqual([[3, 4, 1], [9, 7, 5], [6, 2, 8]], rotate90, matrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
assertEqual([[5, 3], [1, 7], [0, 4], [8, 2]], rotate90, matrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(JSON.stringify(newMatrix3) === JSON.stringify(matrix2));      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
