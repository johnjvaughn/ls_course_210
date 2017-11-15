/*
Problem:
  wordToDigit
  Input: string containing text
  Output: copy of input string with "number words" such as "four", "six" replaced with the appropriate digits
          (handle number words "zero" thru "nine")
  Side Effects: none
  
Examples:
  wordToDigit('Please call me at five five five one two three four. Thanks.');
    // "Please call me at 5 5 5 1 2 3 4. Thanks."

  wordToDigit('Zero eight-four fifty');
    // '0 8-4 fifty'

  wordToDigit('eighty-seven');
    // 'eighty-7' ?? or 'eighty-seven'

  wordToDigit('I am done.');
    // 'I am done.'

Data/Alg:
  plan a: could use RegExp to convert words right in string... might get complex for edge cases
  plan b: split string into words array, iterate and process each word individually, reassemble string

*/

var numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(sentence) {
  var output = String(sentence).slice();
  var regexp;

  numberWords.forEach(function (word, index) {
    regexp = new RegExp('\\b' + word + '\\b', 'ig');
    output = output.replace(regexp, String(index));
  });

  return output;
}

const p = (value) => console.log(value);

p(wordToDigit('Please call me at five five five one two three four. Thanks.')); // "Please call me at 5 5 5 1 2 3 4. Thanks."
p(wordToDigit('Zero eight-four fifty')); // '0 8-4 fifty'
p(wordToDigit('eighty-seven')); // 'eighty-7' ?? or 'eighty-seven' 
p(wordToDigit('I am done.')); // 'I am done.'
p(wordToDigit('')); // ''
p(wordToDigit(5));  // '5'

