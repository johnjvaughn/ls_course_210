var SHIFT = 13; // allowing for other rotation numbers than 13; can be any Integer from 0 to 25
var sentence;

function encodeLetter(letter) {
  var asciiNum = letter.charCodeAt(0) + SHIFT;
  var lowerCase = letter.toLowerCase();

  if (lowerCase.charCodeAt(0) + SHIFT > 'z'.charCodeAt(0)) {
    asciiNum -= 26;
  }

  return String.fromCharCode(asciiNum);
}

function rot13(str) {
  var len = str.length;
  var codedStr = '';
  var lowerCase;
  var i;

  for (i = 0; i < len; i += 1) {
    lowerCase = str[i].toLowerCase();
    if (lowerCase >= 'a' && lowerCase <= 'z') {
      codedStr += encodeLetter(str[i]);
    } else {
      codedStr += str[i];
    }
  }

  return codedStr;
}

sentence = 'Teachers open the door, but you must enter by yourself.';
console.log(rot13(sentence) === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');
console.log(rot13(rot13(sentence)) === sentence);
