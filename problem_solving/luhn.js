function checkSum(numberString) {
  var numberArr = numberString.replace(/[^\d]+/g, '').split('');
  var len = numberArr.length;
  var num;
  
  return numberArr.reduce( function(sum, num, index) {
    if ((len - index) % 2 === 0) {
      num = 2 * +num;
      if (num >= 10) num -= 9;
    }
    return sum + +num;
  }, 0);
}

function cardNumberValid(numberString) {
  return (checkSum(numberString) % 10 === 0);
}

//valid examples
assertEqual(true, cardNumberValid, '2323 2005 7766 3554');
assertEqual(false, cardNumberValid, '3323 2005 7766 3554');
assertEqual(false, cardNumberValid, '1111');
assertEqual(true, cardNumberValid, '21.21.21.21');
assertEqual(true, cardNumberValid, '8763-8888');
assertEqual(false, cardNumberValid, '8763-8887');

function addCheckDigit(numberString) {
  var newString = numberString.replace(/[^\d]+/g, '') + '0';
  var checkSumMod = checkSum(newString) % 10;

  if (checkSumMod !== 0) {
    newString = newString.slice(0, newString.length - 1) + String(10 - checkSumMod);
  }

  return newString;
}

assertEqual('2323200577663554', addCheckDigit, '2323 2005 7766 355');