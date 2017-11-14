function triangle(side) {
  var output = '';
  var i;

  for (i = 1; i <= side; i += 1) {
    output += '*'.repeat(i).padStart(side) + '\n';
  }

  return output;
}

console.log(triangle(5));
console.log(triangle(9));
