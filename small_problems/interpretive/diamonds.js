function diamondSolid(number) {
  var output = '';
  var increment = 2;
  var i;

  if (!Number.isInteger(number) || number % 2 === 0 || number < 0) {
    return undefined;
  }

  for (i = 1; i >= 1; i += increment) {
    output += ' '.repeat((number - i) / 2) + '*'.repeat(i) + '\n';
    if (i === number) increment = -2;
  }

  return output;
}

function diamond(number) {
  var output = '';
  var increment = 2;
  var i;

  if (!Number.isInteger(number) || number % 2 === 0 || number < 0) {
    return undefined;
  }

  for (i = 1; i >= 1; i += increment) {
    output += ' '.repeat((number - i) / 2) + '*';
    if (i > 1) output += ' '.repeat(i - 2) + '*';
    output += '\n';
    if (i === number) increment = -2;
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