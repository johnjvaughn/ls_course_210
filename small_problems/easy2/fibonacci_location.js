function findFibonacciIndexByLength(len) {
  var numberToReach = Math.pow(10, len - 1);
  var a1 = 1;
  var a2 = 1;
  var index = 3;
  var aN;

  while (true) {
    aN = a1 + a2;
    if (aN >= numberToReach) return index;
    a1 = a2;
    a2 = aN;
    index += 1;
  }
}

assertEqual(findFibonacciIndexByLength, 7, 2);
assertEqual(findFibonacciIndexByLength, 45, 10);
assertEqual(findFibonacciIndexByLength, 74, 16);
