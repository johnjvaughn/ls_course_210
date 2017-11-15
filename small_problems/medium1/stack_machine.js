/*
Problem:
  stack machine function that accepts a string containing a list of numbers interspersed with commands
  numbers: integers (and all math should be integer math)
  commands: math(ADD, SUB, MULT, DIV, MOD), register(PUSH, POP), output register(PRINT)

  Can only use an array and a register variable to hold the data, 
    and only pop and push can be performed on the array

Input: string containing minilang program as described above
Output: none
Side Effects: values written to console according to PRINT statements in the program

Examples:
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

Data/Alg:
  The program requirements detail this: one array of numbers (the stack), one number variable (the register).
  The only array functions you may use are pop() and push().

  input is a string of commands/numbers separated by spaces, so use split(' ') to chop them up

  register = null
  stack = []
  programArray = program.split
  loop each programArray
    perform various functions based on commands
    big switch statement {
      handle add, sub, pop, push, etc.
      print = console.log the register
    }
  end loop
  don't return a value

*/

function minilang(program) {
  var register = 0;
  var stack = [];
  var programArray = program.split(/\s+/);

  programArray.forEach(function (element) {
    if (stack.length === 0 && 
        ['ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP'].includes(element)) {
      return "Error: attempt to pop or manipulate empty stack.";
    }
    switch (element) {
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'MOD':
        register %= stack.pop();
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default: // should be a number
        num = parseInt(element, 10);
        if (num === num) {
          register = num;
        } else {
          return "Error: invalid token";
        }
        break;
    }
  });
}

minilang('0 PUSH 0 PUSH 4 DIV PUSH 5 ADD PRINT');  
// 'Infinity'

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// // 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

minilang('5 PUSH POP PRINT');
// // 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// // 12

minilang('-3 PUSH 5 SUB PRINT');
// // 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)