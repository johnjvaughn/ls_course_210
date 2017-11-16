function fridayThe13ths(year) {
  var fridayCount = 0;
  var month;
  var thirteenth;

  for (month = 0; month < 12; month += 1) {
    thirteenth = new Date(year, month, 13);
    if (thirteenth.getDay() === 5) fridayCount += 1;
  }

  return fridayCount;
}

assertEqual(1, fridayThe13ths, 1986);      // 1
assertEqual(3, fridayThe13ths, 2015);      // 3
assertEqual(2, fridayThe13ths, 2017);      // 2
