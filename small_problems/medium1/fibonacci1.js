/*
Problem:
  recursive fibonacci function (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...)
  each term of sequence is the sum of the last two terms
  except first two terms are 1 and 1
  
  Input: positive integer n, representing the nth Fibonacci number
  Output: the Fibonacci number at position n (first Fibonacci number is at position 1)
  Side Effects: none
  
  Recursive function needs to call itself in generating a number
  Fib(n) = Fib(n - 1) + Fib(n - 2) as long as n >= 3
  if n <= 2 just return 1

Examples:
fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(5); // 5
fibonacci(12); // 144

Data/Algorithm:
  if (n <= 2) return 1
  return fib(n-1) + fib(n-2)

*/

function fibonacci(n) {
  if (!Number.isInteger(n) || n <= 0) return;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
