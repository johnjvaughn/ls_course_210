function assertEqual(expected, func, args) {
  var funcArgs = Array.prototype.slice.call(arguments, 2)
  var funcResult = func(...funcArgs);
  console.log(func.name, funcArgs, 'should result in: ' + expected);
  console.log(funcResult === expected ? 'passed' : 'FAILED : ' + String(funcResult));
}
