function staggeredCase(str) {
  return str.split('').map(function (char, index) {
    return (index % 2 === 0) ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}

assertEqual("I LoVe lAuNcH ScHoOl!", staggeredCase, 'I Love Launch School!');
assertEqual("AlL_CaPs", staggeredCase, 'ALL_CAPS');
assertEqual("IgNoRe 77 ThE 444 NuMbErS", staggeredCase, 'ignore 77 the 444 numbers');
