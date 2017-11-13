function reverse1(str) {
  var revStr = '';

  str.split('').forEach(function (char) {
    revStr = char + revStr;
  });

  return revStr;
}

function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"
