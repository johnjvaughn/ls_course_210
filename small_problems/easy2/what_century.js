SUFFIXES = {
  1: 'st',
  2: 'nd',
  3: 'rd',
  11: 'th',
  12: 'th',
  13: 'th',
  'default': 'th',
}

function century(year) {
  var centuryNum = Math.floor((year - 1) / 100) + 1;
  var lastTwo = centuryNum % 100;
  var lastOne = centuryNum % 10;
  var suffix = SUFFIXES[lastTwo] || SUFFIXES[lastOne] || SUFFIXES['default'];

  return (String(centuryNum) + suffix);
}

assertEqual('20th', century, 2000);
assertEqual('21st', century, 2001);
assertEqual('20th', century, 1965);
assertEqual('3rd', century, 256);
assertEqual('1st', century, 5);
assertEqual('102nd', century, 10103);
assertEqual('11th', century, 1052);
assertEqual('12th', century, 1127);
assertEqual('113th', century, 11201);