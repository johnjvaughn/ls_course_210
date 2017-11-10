function asciiValue(sentence) {
  var sum = 0;
  var len = sentence.length;
  var i;

  for (i = 0; i < len; i += 1) {
    sum += sentence.charCodeAt(i);
  }

  return sum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
