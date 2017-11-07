//1.
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();
/*
Uncaught ReferenceError
because a is never declared or assigned
*/
/*Wrong:
undefined
because the declaration var a is hoisted out of its block to the top of the function say
*/

//2.
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);
/*
hello
Uncaught ReferenceError
because the "var a" declaration is hoisted to the top of function "hello", making it a local scope
variable -- console.log(a) at the bottom has no access to it.
*/

//3.
var a = 'hello';

for (var i = 0; i < 5; i += 1) {
  var a = i;
}

console.log(a);
/*
4
The variable re-declarations within the for loop have no effect & don't generate any error.
*/

//4.
var a = 1;

function foo() {
  a = 2;
  function bar() {
    a = 3;
    return 4;
  }

  return bar();
}

console.log(foo());
console.log(a);
/*
4
3
bar() always returns 4 and foo always returns the result of bar, so the first output is "4".
Functions foo and bar reassign "a" to 2 and then 3, before the last line outputs its value, "3".
*/

//5.
var a = 'global';

function checkScope() {
  var a = 'local';
  function nested() {
    var a = 'nested';
    function superNested() {
      a = 'superNested';
      return a;
    }

    return superNested();
  }

  return nested();
}

console.log(checkScope());
console.log(a);
/*
superNested
superNested
checkScope returns the return value of nested which in turn is the return value of superNested which is always "superNested".
"a" is redefined locally within checkScope and nested, but within superNested, it is not declared locally,
so it is the global version of "a" that gets reassigned to "superNested".
*/
/*Wrong, the second line is
global
because the "a" within superNested() is found to be an "a" that is the nearest outer scope, not necessarily
global scope.
*/

//6.
var a = 'outer';
var b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}
/*
outer
outer
outer
inner
The function setScope() reassigns its argument "foo" but this has no effect on the outer scope variable a
that was passed as an argument.  However "b" is reassigned directly within setScope() so that change is
demonstrated on the last console.log statement.
*/

//7.
var total = 50;
var increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);
/*
50
60
15
*/

//8.
var a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};
/*
outer
outer / or Uncaught TypeError
The variable declaration for "setScope" is hoisted, but the assignment is not.  So at the point
setScope() is called, it is undefined.  This will either generate an error or simply do nothing,
leaving "a" unchanged in value.
*/

