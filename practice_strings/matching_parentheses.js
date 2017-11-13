function isBalanced1(str) {
  var justParens = str.replace(/[^\(\)]/g, '').split('');
  var len = justParens.length;
  var count = 0;
  var i;

  for (i = 0; i < len; i += 1) {
    count = (justParens[i] === '(') ? count + 1 : count - 1;
    if (count < 0) return false;
  }

  return count === 0;
}

function isBalanced(str) {
  var justParens = str.replace(/[^\(\)]/g, '');
  var len;

  while (true) {
    len = justParens.length;
    justParens = justParens.replace(/\(\)/g, '');
    if (justParens.length === len) {
      return (justParens.length === 0);
    }
  }
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false