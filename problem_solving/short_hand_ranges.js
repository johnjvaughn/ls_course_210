
function decipherShortHand(shortHandStr) {
  var output = [];
  var rangeMode = false;
  var elements;
  var currentNum;
  var i;
  var len;

  shortHandStr = shortHandStr.replace(/\.\.|\-|:/g, '-');
  elements = shortHandStr.split(/\b/);
  currentNum = +elements[0];
  output = [currentNum];

  for (i = 1; i < elements.length; i += 1) {
    element = elements[i];
    if (element === ',' || element === '-') {
      rangeMode = (element === '-');
      continue;
    }
    len = element.length;
    currentNum += 1;
    while (String(currentNum).substr(-len) !== element) {
      if (rangeMode) output.push(currentNum);
      currentNum += 1;
    }
    output.push(currentNum);
  }

  return output;
}

/*
input: accept in form of a string "1,3,7,2,4,1" clean up?
split the string into an array,
iterate through, generating a new array of numbers that always increases

1,3,7,2,4,1 => 1, 3, 7, 12, 14, 21
1-3,1-2 => 1, 2, 3, 11, 12
1:5:2 => 1, 2, 3, ... 11, 12
104-2 => 104, 105, 106, ... 112
104..02 => 104, 105, 106, ... 202
545,64:11 => 545, 564, 565, 566, ... 611

*/
assertEqual([1, 3, 7, 12, 14, 21], decipherShortHand, '1,3,7,2,4,1');
assertEqual([1, 2, 3, 11, 12], decipherShortHand, '1-3,1-2');
assertEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], decipherShortHand, '1:5:2');
assertEqual([104, 105, 106, 107, 108, 109, 110, 111, 112], decipherShortHand, '104-2');
var arr = [];
for (var i = 104; i <= 202; i += 1) {
  arr.push(i);
}
assertEqual(arr, decipherShortHand, '104..02');
arr = [545];
for (var i = 564; i <= 611; i += 1) {
  arr.push(i);
}
assertEqual(arr, decipherShortHand, '545,64:11');
