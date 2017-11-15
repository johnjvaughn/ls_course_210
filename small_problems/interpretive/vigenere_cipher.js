var alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
var alphabetUpper = alphabetLower.toUpperCase();

function vigenereEncrypt(plainText, keyword) {
  var keyIndex = -1;
  var keyLen = keyword.length;
  var keyArr = keyword.toLowerCase().split('').map (function (letter) {
    return alphabetLower.indexOf(letter);
  });

  return plainText.split('').map( function (char) {
    if (/[a-z]/i.test(char)) keyIndex = (keyIndex + 1) % keyLen;
    return shiftLetter(char, keyArr[keyIndex]);
  }).join('');
}

function shiftLetter(char, key) {
  var alphabet;
  var alphaIndex;
  var shiftedIndex;

  if (alphabetLower.includes(char)) {
    alphabet = alphabetLower;
  } else if (alphabetUpper.includes(char)) {
    alphabet = alphabetUpper;
  } else {
    return char;
  }

  alphaIndex = alphabet.indexOf(char);
  shiftedIndex = (alphaIndex + key) % alphabet.length;
  return alphabet[shiftedIndex];
}

/*
Problem: encode a string of letters (and/or other chars) by shifting the upper/lower case letters
a designated number of letters "to the right" (i.e. A becomes D if number is 3 or 29) performed
modulo over the 26 letters of the alphabet.  Keep each char's case unchanged, and keep all 
non-alpha characters the same.  This time use a keyword input as a rotating Caesar cipher number.
So a keyword of 'meat' indicates to rotate the first letter of the message by 12, then 4, then 0, then 19,
then back to 12 again and continue rotating. Don't rotate over a non-alpha char in the plaintext.

input: plaintext message (string)
       keyword (string, letters only, case doesn't matter)
output: encrypted message (string)
*/

/*
Examples
*/
assertEqual('Pineapples don\'t go on pizzas!', vigenereEncrypt, 'Pineapples don\'t go on pizzas!', 'AAAAaa');
assertEqual('Bmnxmtpeqw dhz\'x gh ar pbldal!', vigenereEncrypt, 'Pineapples don\'t go on pizzas!', 'meat');
assertEqual('Riogaqrlfu dpp\'t hq oo riabat!', vigenereEncrypt, 'Pineapples don\'t go on pizzas!', 'cab');
assertEqual('Uoh', vigenereEncrypt, 'Dog', 'Rabbit');



