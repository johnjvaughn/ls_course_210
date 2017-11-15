/*
Problem:
  Input: string with misc. content
  Output: object with 3 properties: 
    { 'lowercase': percentage of string chars that are lowercase letters
      'uppercase': percentage of string chars that are uppercase letters
      'neither': percentage that are not letters at all
    } (all numbers rounded to nearest hundredth of a percent and represented as strings -- no % signs)
  Side Effects: none

  Will need to find the total length of the string, as well as
  get counts of each type of char, then divide each by the total and
  mult by 100 to get percentages

Examples:
  letterPercentages('AaBbCc'); // { lowercase: '50.00', uppercase: '50.00', neither: '0.00' }
  letterPercentages('Aabc *@#dE'); // { lowercase: '40.00', uppercase: '20.00', neither: '40.00' }
  letterPercentages('z'); // { lowercase: '100.00', uppercase: '0.00', neither: '0.00' }
  
Data/Algorithm:
  Plan A: just iterate through the string and count up types of chars using char codes, ie.
  if (char between 'A' and 'Z') increment upperCount
  if (char between 'a' and 'z') increment lowerCount
  else increment neitherCount

  Plan B: maybe something clever like separating the string into 3 strings with different type in each
          or using RegExp
*/

function letterPercentages(str) {
  var len = str.length;
  var upperStr = str.replace(/[^A-Z]/g, '');
  var lowerStr = str.replace(/[^a-z]/g, '');
  var neitherStr = str.replace(/[a-zA-Z]/g, '');
  var report;

  report = {
    lowercase: (100 * lowerStr.length / len).toFixed(2),
    uppercase: (100 * upperStr.length / len).toFixed(2),
    neither: (100 * neitherStr.length / len).toFixed(2),
  }
  return report;
}

console.log(letterPercentages('AaBbCc')); // { lowercase: '50.00', uppercase: '50.00', neither: '0.00' }
console.log(letterPercentages('Aabc *@#dE')); // { lowercase: '40.00', uppercase: '20.00', neither: '40.00' }
console.log(letterPercentages('z')); // { lowercase: '100.00', uppercase: '0.00', neither: '0.00' }
console.log(letterPercentages('abCdef 123')); // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
console.log(letterPercentages('AbCd +Ef')); // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
console.log(letterPercentages('123')); // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }