function removeVowels(arrOfStrs) {
  return arrOfStrs.map(function (str) {
    return str.replace(/[aeiou]/gi, '');
  });
}

assertEqual(["bcdfghjklmnpqrstvwxyz"], removeVowels, ['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
assertEqual(["grn", "YLLW", "blck", "wht"], removeVowels, ['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
assertEqual(["BC", "", "XYZ"], removeVowels, ['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
