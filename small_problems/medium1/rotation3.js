/*
Problem: 
input:  a positive integer (number)
output:  the "maximum rotation" of the input number.
         This is a process of rotating all n digits, then the rightmost n-1 digits, then n-2, etc.
         until the last 2 digits are rotated.
         Finally, drop any leading zeroes.
side effects: none

bad input: implicitly should be a positive integer


Examples:
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845


Data/Algorithm:
treat number as a string -- this algorithm could as easily be done with string of letters
but convert to a number before returning
use the rotateRightmostDigits function from rotation2 exercise

loop (n start at numberStr.length, stop at 2) {
  rotateRightmostDigits(number, n)
}

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

function maxRotation (number) {
  //input check
  var numberLen = String(number).length;
  var numDigits;

  for (numDigits = numberLen; numDigits >= 2; numDigits -= 1) {
    number = rotateRightmostDigits(number, numDigits)
  }

  return number;
}

const p = (value) => console.log(value);

p(maxRotation(735291));          // 321579
p(maxRotation(3));               // 3
p(maxRotation(35));              // 53
p(maxRotation(105));             // 15 -- the leading zero gets dropped
p(maxRotation(8703529146));      // 7321609845
