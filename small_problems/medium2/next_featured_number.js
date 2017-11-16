var MAX_UNIQUE_DIGIT_NUM = 9876543210;

function noRepeats(str) {
  return !/(.).*\1/.test(str);
}

function featured(start) {
  for (var i = 7; i <= MAX_UNIQUE_DIGIT_NUM; i += 14) {
    if (i > start && noRepeats(String(i))) return i;
  }

  return 'no featured number found';
}


assertEqual(21, featured, 12);           // 21
assertEqual(21, featured, 20);           // 21
assertEqual(35, featured, 21);           // 35
assertEqual(1029, featured, 997);          // 1029
assertEqual(1043, featured, 1029);         // 1043
assertEqual(1023547, featured, 999999);       // 1023547
assertEqual(1023456987, featured, 999999987);    // 1023456987
assertEqual('no featured number found', featured, 99999998799);    // 1023456987

// console.log(noRepeats('1023449'));
