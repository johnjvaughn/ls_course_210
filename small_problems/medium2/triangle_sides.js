/*
Problem:
  Classify a given triangle by type: equilateral, isosceles, scalene, or invalid
  Input: three numbers representing the lengths of 3 sides of a potential triangle
  Output: classification as one of the four types
    Equilateral means all sides equal
    Isosceles means exactly two sides equal
    Scalene means no sides equal (if valid, see below)
    Invalid if a triangle can't be made with the indicated side lengths. The two shortest sides must
      sum to a number larger than the longest side's length. 
      No side can be zero or negative.
  Side Effects: none

Examples:
  triangle(3, 3, 3);        // "equilateral"
  triangle(3, 3, 1.5);      // "isosceles"
  triangle(3, 4, 5);        // "scalene"
  triangle(0, 3, 3);        // "invalid"
  triangle(3, 1, 1);        // "invalid"

Data/Alg:
  Probably want to check for any 0 or negative values first, and return invalid if found
  Then if all equal, return equilateral -- it can't be invalid.
  Check for validity in terms of shortest + middle > longest side
  If 2 sides equal, return isosceles
  else return scalene

*/

function triangle(sideA, sideB, sideC) {
  var sides = [sideA, sideB, sideC].sort(function (a, b) {
    return a - b;
  });

  if ((sides[0] <= 0) || (sides[0] + sides[1] <= sides[2])) return 'invalid';
  if (sides[0] === sides[2]) return 'equilateral';
  if (sides[0] === sides[1] || sides[1] === sides[2]) return 'isosceles';
  return 'scalene';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
