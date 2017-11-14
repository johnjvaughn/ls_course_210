

// input: string of digits intersersed with other chars
// 10 digit number or '1' + 10 digits
// ignore/remove other characters: <space>, -, ., (, ) 
// if bad input, return '0000000000' (10 x '0')
// Q1: could there be any other characters and would they make the string invalid?

// Q1: return phone number or change in place?
// output: just the 10 digits (remove beginning 1 if it's 1+ 10 digit format)

var NULL_PHONE = '0000000000';

function cleanNumber(messyPhoneNum) {
  var clean = messyPhoneNum.replace(/[^\d]/g, '');  //see Q1

  if (/^\d{10}$/.test(clean)) {
    return clean;
  } else if (/^1\d{10}$/.test(clean)) {
    return clean.slice(1);
  }
  return NULL_PHONE;
}

function assertEqual(expected, func, args) {
  var funcArgs = Array.prototype.slice.call(arguments, 2)
  var funcResult = func(...funcArgs);
  console.log(func.name, funcArgs, 'should result in: ' + expected);
  console.log(funcResult === expected ? 'passed' : 'FAILED : ' + String(funcResult));
}

assertEqual('8885247762', cleanNumber, '(888)-524-7762');
assertEqual('8885247762', cleanNumber, '1-(888)-524-7762');
assertEqual('1885271762', cleanNumber, '(188)-52-71762');
assertEqual('8889998765', cleanNumber, '888.999.8765');
assertEqual('8889998765', cleanNumber, '.1888.999.8765');
assertEqual('8889998765', cleanNumber, '   .1888 .999 .8765');

//invalid
assertEqual(NULL_PHONE, cleanNumber, '(888)-52-7762');  //too few digits
assertEqual(NULL_PHONE, cleanNumber, '1(800)-527-91762'); //too many
