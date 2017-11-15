/*
Problem:
  recursive memoization fibonacci function (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...)
  each term of sequence is the sum of the last two terms
  except first two terms are 1 and 1
  
  Input: positive integer n, representing the nth Fibonacci number
  Output: the Fibonacci number at position n (first Fibonacci number is at position 1)
  Side Effects: none
  
  Recursive function needs to call itself in generating a number
  Fib(n) = Fib(n - 1) + Fib(n - 2) as long as n >= 3
  if n <= 2 just return 1
  For memoization, use a lookup table in a global var to store computed values

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

function fibonacci(n, memo = { 1: 1, 2: 1 }) {
  if (memo[n]) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(100));      // 3 5422 4848 1792 6191 5075

