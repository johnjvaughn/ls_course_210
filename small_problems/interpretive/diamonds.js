function diamond(number) {
  var output = '';
  var i;

  if (!Number.isInteger(number) || number % 2 === 0 || number < 0) {
    return undefined;
  }

  //iterate over odd integers from 1 up to <number>
  //output a separate line of *s for each iteration index
  //length of each line of *s = iterator
  //then, go in reverse, back down to 1

  for (i = 1; i <= number; i += 2) {
    output += ' '.repeat((number - i) / 2) + '*'.repeat(i) + '\n';
  }
  for (i = number - 2; i >= 1; i -= 2) {
    output += ' '.repeat((number - i) / 2) + '*'.repeat(i) + '\n';
  }

  return output;
}

console.log(diamond(5));
// console.log(diamond('one'));

console.log(diamond(1) === "*\n");
console.log(diamond(3) === " *\n***\n *\n");
console.log(diamond(5) === "  *\n ***\n*****\n ***\n  *\n");
console.log(diamond(7) === "   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n");

console.log(diamond('one') === undefined);
console.log(diamond(4) === undefined);
console.log(diamond(-1) === undefined);