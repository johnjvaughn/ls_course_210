function isUppercase(str) {
  return !/[a-z]/.test(str);
}

assertEqual(false, isUppercase, 't');               // false
assertEqual(true, isUppercase, 'T');               // true
assertEqual(false, isUppercase, 'Four Score');      // false
assertEqual(true, isUppercase, 'FOUR SCORE');      // true
assertEqual(true, isUppercase, '4SCORE!');         // true
assertEqual(true, isUppercase, '');                // true