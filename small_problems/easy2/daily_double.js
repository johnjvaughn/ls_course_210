function crunch1(str) {
  var result = '';
  var len = str.length;
  var i;

  for (i = 0; i < len; i += 1) {
    if (result[result.length - 1] === str[i]) continue;
    result += str[i];
  }

  return result;
}

function crunch(str) {
  return str.replace(/(.)\1+/g, '$1');
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
