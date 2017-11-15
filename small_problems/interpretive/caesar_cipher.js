var alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

function caesarEncrypt(plainText, key) {
  return plainText.split('').map( function (char) {
    return shiftLetter(char, key);
  }).join('');
}

function shiftLetter(char, key) {
  var alphaIndex = alphabet.indexOf(char);
  var shiftedIndex;

  if (alphaIndex < 0) return char;
  shiftedIndex = (alphaIndex + 2 * key) % alphabet.length;
  return alphabet[shiftedIndex];
}

/*
Problem: encode a string of letters (and/or other chars) by shifting the upper/lower case letters
a designated number of letters "to the right" (i.e. A becomes D if number is 3 or 29) performed
modulo over the 26 letters of the alphabet.  Keep each char's case unchanged, and keep all 
non-alpha characters the same.
*/

assertEqual('A', caesarEncrypt, 'A', 0);
assertEqual('D', caesarEncrypt, 'A', 3);
assertEqual('d', caesarEncrypt, 'y', 5);
assertEqual('v', caesarEncrypt, 'a', 47);
assertEqual('ZABCDEFGHIJKLMNOPQRSTUVWXY', caesarEncrypt, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
assertEqual('Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!', caesarEncrypt, 
            'The quick brown fox jumps over the lazy dog!', 5);
assertEqual('Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?', caesarEncrypt, 
            'There are, as you can see, many punctuations. Right?; Wrong?', 2);

/*
Data: keep input as a string or convert to array of chars
Output: string

Algorithm:
Seems like a possible mapping algorithm:  each letter character maps to another letter <shift> places away

declare a constant containing the alphabet
split input into array of chars, and do
charArr.map ( => char's index in alphabet const => add the shift mod 26 => look up new letter in that position )
*/

