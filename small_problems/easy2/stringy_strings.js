function stringy(len) {
  var str = '';
  var i;

  for (i = 0; i < len; i += 1) {
    str += (i % 2 === 0) ? '1' : '0';
  }

  return str;
}

assertEqual(stringy, "101010", 6);    // "101010"
assertEqual(stringy, "101010101", 9);    // "101010101"
assertEqual(stringy, "1010", 4);    // "1010"
assertEqual(stringy, "1010101", 7);    // "1010101"