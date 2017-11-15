/*
Problem:
  procedural fibonacci function (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...)
  each term of sequence is the sum of the last two terms
  except first two terms are 1 and 1
  
  Input: positive integer n, representing the nth Fibonacci number
  Output: the Fibonacci number at position n (first Fibonacci number is at position 1)
  Side Effects: none
  
  loop from 1 to n, keeping a sum of last two terms, and using that sum as the next term

Examples:
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(100);      // 354224848179261915075

Data/Algorithm:
  arr lastTwoTerms = [1, 1];
  loop (for 3 to n)
    fib = lastTwoTerms.sum 
    lastTwoTerms[0] = lastTwoTerms[1]
    lastTwoTerms[1] = fib
  end
  return fib

*/

function fibonacci(n) {
  var lastTwoTerms = [1, 1];
  var i;

  if (!Number.isInteger(n) || n <= 0) return;
  for (i = 3; i <= n; i += 1) {
    lastTwoTerms = [lastTwoTerms[1], lastTwoTerms[0] + lastTwoTerms[1]];
  }
  
  return lastTwoTerms[1];
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
