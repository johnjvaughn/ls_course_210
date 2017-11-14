function compareVersions(version1, version2) {
  var validRegExp = /^\d+(\.\d+)*$/;
  var ver1Arr;
  var ver2Arr;
  var maxLength;
  var num1;
  var num2;

  if (!validRegExp.test(version1) || !validRegExp.test(version2)) return null;
  ver1Arr = version1.split('.').map(Number);
  ver2Arr = version2.split('.').map(Number);
  maxLength = Math.max(ver1Arr.length, ver2Arr.length);

  for (var i = 0; i < maxLength; i += 1) {
    num1 = ver1Arr[i] || 0;
    num2 = ver2Arr[i] || 0;
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0;
}


//invalid
assertEqual(null, compareVersions, '0.1', '1,2');
assertEqual(null, compareVersions, '0.1', '1.2 ');
assertEqual(null, compareVersions, '0..1', '1.2');
assertEqual(null, compareVersions, '1.1', '.87');
assertEqual(null, compareVersions, '1.a', '1.3');

// inequal
assertEqual(-1, compareVersions, '0.1', '1');
assertEqual(1, compareVersions, '1', '0.1');
assertEqual(-1, compareVersions, '2.2', '2.20');
assertEqual(-1, compareVersions, '1.18.2', '13.37');
assertEqual(-1, compareVersions, '5.0', '5.06');

//equal
assertEqual(0, compareVersions, '10.2', '10.2');
assertEqual(0, compareVersions, '1.0', '1');
assertEqual(0, compareVersions, '1.2', '1.2.0.0');


/*
split string into subsections
compare number versus number starting from the left
if one number is greater than the other, order is determined
else if they are equal, move on to next slot to compare

nothing == 0
i.e.
1.0 === 1

1.2.0.0 === 1.2.0 === 1.2

input: two version numbers in string representation, version1 and version2
output: one of: 1, 0, or -1; or null for invalid inputs
*/