function letterCaseCount(str) {
  var returnObj = {};
  var lower = str.match(/[a-z]/g) || [];
  var upper = str.match(/[A-Z]/g) || [];

  returnObj['lowercase'] = lower.length;
  returnObj['uppercase'] = upper.length;
  returnObj['neither'] = str.length - lower.length - upper.length;
  return returnObj;
}

assertEqual({ lowercase: 5, uppercase: 1, neither: 4 }, letterCaseCount, 'abCdef 123');
assertEqual({ lowercase: 3, uppercase: 3, neither: 2 }, letterCaseCount, 'AbCd +Ef');
assertEqual({ lowercase: 0, uppercase: 0, neither: 3 }, letterCaseCount, '123');
assertEqual({ lowercase: 0, uppercase: 0, neither: 0 }, letterCaseCount, '');
