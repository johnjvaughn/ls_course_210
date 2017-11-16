function sigmaN(n) {
  return n * (n + 1) / 2;
}

function sigmaN2(n) {
  return n * (n + 1) * (2 * n + 1) / 6
}

function sumSquareDifference(number) {
  return Math.pow(sigmaN(number), 2) - sigmaN2(number);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150