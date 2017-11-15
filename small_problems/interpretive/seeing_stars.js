//recursive
var star7 = ['*  *  *', ' * * *', '  ***', '*******', '  ***', ' * * *', '*  *  *'];

function buildStar(number) {
  var smallerStar;
  var thisStar;
  var newLine;
  
  if (number <= 7) return star7;
  smallerStar = buildStar(number - 2);
  thisStar = smallerStar.map (function (line) {
    return (line.match(/^\*+$/)) ? '*' + line + '*' : ' ' + line;
  });

  newLine = '*' + ' '.repeat((number - 3) / 2);
  newLine += newLine + '*';
  
  thisStar.unshift(newLine);
  thisStar.push(newLine);
  return thisStar;
}

function star(number) {
  if (number % 2 === 0 || number < 7) return;
  console.log('star(' + String(number) + ')');
  console.log(buildStar(number).join('\n'));
}

//non-recursive
function initializeStar(number) {
  var emptyLine = [];
  var starArr = [];
  var col;
  var row;
  
  for (col = 0; col < number; col += 1) {
    emptyLine.push(' ');
  }
  for (row = 0; row < number; row += 1) {
    starArr.push(emptyLine.slice());
  }

  return starArr;
}

function star2(number) {
  var starArr = initializeStar(number);
  var middle = (number - 1) / 2;
  var row;
  var col;
  var display;

  if (number % 2 === 0 || number < 7) return;
  for (row = 0; row < number; row += 1) {
    for (col = 0; col < number; col += 1) {
      if (row === col || row === number - col - 1 || row === middle || col === middle) {
        starArr[row][col] = '*';
      }
    }
  }

  display = starArr.map (function (row) {
    return row.join('');
  }).join('\n');

  console.log('star(' + String(number) + ')');
  console.log(display);
}


/*
Problem:
display a star in an 8-pointed pattern:
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
within an n x n grid where n is given and n will be odd and >= 7
We will iterate over 1..n and display 3 *s per line, except the middle line which is all *s.
We may wish to create the first half (minus the center bar) and copy that and flip it to create the
part below the bar, or vice versa.

Q: behavior for bad inputs such as even n, lower than 7, non-integer, non-number? 

input: number, n
output: none, except side effect to console
side effect: display star in console
*/

/*
Examples
*/
star(7);
star(9);
star(11);
star(10);

