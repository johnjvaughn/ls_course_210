function repeatChar(char, times) {
  var repeated = '';
  var i;

  for (i = 0; i < times; i += 1) {
    repeated += char;
  }

  return repeated;
}

function logInBox(str) {
  var len = str.length;
  var boxTop = '+' + repeatChar('-', str.length + 2) + '+';
  var boxBottom = boxTop;
  var boxSides = '|' + repeatChar(' ', str.length + 2) + '|';

  console.log(boxTop);
  console.log(boxSides);
  console.log('| ' + str + ' |');
  console.log(boxSides);
  console.log(boxBottom);
}


logInBox('To boldly go where no one has gone before.');
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+