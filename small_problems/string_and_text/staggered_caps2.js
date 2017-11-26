function staggeredCase(str) {
  var upper = false;

  return str.split('').map(function (char) {
    if (char.match(/[a-z]/i)) {
      upper = !upper;
      return upper ? char.toUpperCase() : char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

assertEqual("I lOvE lAuNcH sChOoL!", staggeredCase, 'I Love Launch School!');
assertEqual("AlL cApS", staggeredCase, 'ALL CAPS');
assertEqual("IgNoRe 77 ThE 444 nUmBeRs", staggeredCase, 'ignore 77 the 444 numbers');
