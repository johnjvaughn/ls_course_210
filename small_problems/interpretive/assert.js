const eql = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

function assertEqual(expected, func, args) {
  var funcArgs = Array.prototype.slice.call(arguments, 2)
  var funcResult = func(...funcArgs);

  console.log(func.name, funcArgs, 'should result in: ' + expected);
  console.log(eql(funcResult, expected) ? 'passed' : 'FAILED : ' + JSON.stringify(funcResult));
}
