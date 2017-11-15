/*
Problem: 
input:  a positive integer (number), and a positive integer (n).
output:  the first number input but with the last n digits "rotated" to the left by one
         the first digit of the n-span should be moved to the far right of number
side effects: none

bad input: seems like both inputs should be integers, n should be positive, 
           and number should have at least n digits.
           ask what should be done with bad input


Examples:
rotateRightmostDigits(123456, 3) => 123564 (right 3 digits rotated by 1)
rotateRightmostDigits(987654, 5) => 976548 (right 5 digits rotated by 1)
rotateRightmostDigits(987654, 1) => 987654 (no change)


Data/Algorithm:
treat number as a string -- this algorithm could as easily be done with string of letters
but return function result as a number
slice off the n rightmost digits as a string, rotate them, and concat them back on to the original
prefix digits
prefix + suffix(n chars) => prefix + rotated(suffix) => convert to number

*/

function rotateRightmostDigits(number, numDigits) {
  var numberStr = String(number);
  var numberLen = numberStr.length;
  var prefix;
  var suffix;

  if (!Number.isInteger(number) || !Number.isInteger(numDigits)) return;
  if (numDigits < 0) return;
  if (numDigits <= 1) return number;

  prefix = numberStr.slice(0, numberLen - numDigits);
  suffix = numberStr.slice(-numDigits);
  suffix = suffix.slice(1).concat(suffix[0]);
  return +(prefix + suffix);
}

const p = (value) => console.log(value);

p(rotateRightmostDigits(735291, 1)); // 735291
p(rotateRightmostDigits(735291, 2)); // 735219
p(rotateRightmostDigits(735291, 3)); // 735912
p(rotateRightmostDigits(735291, 4)); // 732915
p(rotateRightmostDigits(735291, 5)); // 752913
p(rotateRightmostDigits(735291, 6)); // 352917

p(rotateRightmostDigits(735291, 0)); // 735291
p(rotateRightmostDigits(-735291, 3)); // -735912
p(rotateRightmostDigits(735291, -6)); // undefined
p(rotateRightmostDigits(735291, 5.5)); // undefined
p(rotateRightmostDigits('735291', 5.5)); // undefined
